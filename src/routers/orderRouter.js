import express from 'express';
import { Order } from '../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, image } = req.body;
  if (!name || !image) return res.status(400).json({ message: 'Для отправки заказа необходимо заполнить все поля формы' });
  await Order.create(req.body);
  res.status(200).json({
    message: 'Ваш заказ отправлен! Проверьте ваш e-mail!',
  });
});

export default router;
