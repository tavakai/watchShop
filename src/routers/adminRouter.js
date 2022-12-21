import express from 'express';
import { Order } from '../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
});

router.get('/orders', async (req, res) => {
  const cards = await Order.findAll({ where: { status: false } });
  res.json(cards);
});

export default router;
