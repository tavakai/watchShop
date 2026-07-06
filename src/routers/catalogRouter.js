import express from 'express';
import { Order } from '../db/models';

const router = express.Router();

router.get('/watches', async (req, res) => {
  const cards = await Order.findAll({ where: { status: true } });
  res.json(cards);
});

export default router;
