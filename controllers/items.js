import mongoose from 'mongoose';
import Item from '../models/Item';

export const getItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (e) {
    console.log(e);
  }
};

export const createItem = async (req, res) => {
  try {
    const item = new Item({
      name: req.body.name,
      category: req.body.category,
      imgUrl: req.body.imgUrl,
      buyPrice: req.body.buyPrice,
      ripeningTime: req.body.ripeningTime,
      ripeningsCount: req.body.ripeningsCount,
      countPerItem: req.body.countPerItem,
      pricePerItem: req.body.pricePerItem,
    });
    res.json(await item.save());
  } catch (e) {
    console.log(e);
  }
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    category,
    imgUrl,
    buyPrice,
    ripeningTime,
    ripeningsCount,
    countPerItem,
    pricePerItem,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`);

  const updatedItem = {
    name,
    category,
    imgUrl,
    buyPrice,
    ripeningTime,
    ripeningsCount,
    countPerItem,
    pricePerItem,
    _id: id,
  };

  await Item.findByIdAndUpdate(id, updatedItem, { new: true });

  res.json(updatedItem);
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`);

  await Item.findByIdAndRemove(id);

  res.json({ message: 'Item deleted successfully.' });
};
