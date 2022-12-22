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

router.get('/complete/:id', async (req, res) => {
  const completeOrder = await Order.findOne({ where: { id: req.params.id } });
  completeOrder.status = true;
  completeOrder.save();
  res.sendStatus(200);
});

router.delete('/delete/:id', async (req, res) => {
  await Order.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

router.patch('/edit/:id', async (req, res) => {
  const edit = await Order.findOne({ where: { id: req.params.id } });
  const { name, image } = req.body;
  edit.name = name;
  edit.image = image;
  edit.save();
  res.sendStatus(200);
});

export default router;
