import express from 'express';
import bcrypt, { compare } from 'bcrypt';
import { User } from '../db/models';

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/registration', (req, res) => {
  res.render('Layout');
});

router.post('/registration', async (req, res) => {
  // забираем все нужные свойства
  const {
    name, email, password,
  } = req.body;
  // если user ввел только пароль или только логин возвращаем сообщение которое покажем над формой
  if (!name || !email || !password) return res.status(400).json({ message: 'Необходимо заполнить все поля формы регистрации' });
  // нужно захэшировать пароль
  const hash = await bcrypt.hash(password, 7);
  try {
    // ищем есть ли пользователь в базе, если нет - записываем в базу
    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: {
        name, email, password: hash, isAdmin: false,
      },
    });
    // если уже зарегистрирован - возвращаем message
    if (!isCreated) return res.status(401).json({ message: 'Пользователь уже зарегистрирован!' });
    // записываем нового пользователя в сессию
    req.session.user = {
      id: user.id, name: user.name, email: user.email, isAdmin: false,
    };
    res.sendStatus(200);
  } catch (err) {
    res.status(418).json({ message: 'Вы чайник' });
  }
});

router.post('/login', async (req, res) => {
  // достаем email и password
  const { email, password } = req.body;
  // проверка на заполнение всех полей
  if (!email || !password) return res.status(400).json({ message: 'Необходимо заполнить все поля' });
  try {
    // ищем user в БД по email
    const userInDB = await User.findOne({ where: { email } });
    // если в ДБ нет такого юзера
    if (!userInDB) return res.status(400).json({ message: 'Не верно указаны email или пароль' });
    // сверка пароля
    const validPassword = await compare(password, userInDB.password);
    // вернет месседж, если пароль не совпадет
    if (!validPassword) return res.status(400).json({ message: 'Неверно введён логин или пароль пользователя' });
    // если всё ОК -> созд сессию и отправляем на фронт
    req.session.user = userInDB;
    res.json(userInDB);
  } catch (err) {
    res.status(400).json({ message: 'Неверно введён логин или пароль пользователя' });
  }
});

router.get('/logout', (req, res) => {
  // удалить куку
  res.clearCookie('user_sid');
  // Завершить сессию
  req.session.destroy();
  res.redirect('/');
});

export default router;
