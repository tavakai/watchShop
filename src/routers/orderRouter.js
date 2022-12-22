import express from 'express';
import { Order, User } from '../db/models';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'tavakaiam@yandex.ru',
    pass: 'Tavakai774332',
  },
});

// Функция отправка данных на почту
async function sendemail(email, text) {
  const mailOptions = {
    from: 'tavakaiam@yandex.ru',
    to: email,
    subject: 'Поздравляем! Заказ отправлен.',
    text,
  };
  await transporter.sendMail(mailOptions);
}

const textEmail = (name, image) => `Поздравляем! Вы успешно отправили ваш заказ на уникальные часы ручной работы!

    Параметры заказа:
    Название часов: ${name}
    Ссылка на изображение ваших уникальных часов: ${image}

    Данное письмо не требует ответа.`;

const router = express.Router();

router.post('/:userId', async (req, res) => {
  const { name, image } = req.body;
  const { userId } = req.params;
  const userFromMail = await User.findOne({ where: { id: userId } });
  if (!name || !image) return res.status(400).json({ message: 'Для отправки заказа необходимо заполнить все поля формы' });
  await Order.create({
    name, image, userId,
  });
  res.status(200).json({ message: 'Ваш заказ отправлен! Ожидайте подтверждение заказа на Email!' });

  await sendemail(userFromMail.email, textEmail(name, image));
  res.sendStatus(200);
});

export default router;
