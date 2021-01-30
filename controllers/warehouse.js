import mongoose from 'mongoose';
import Warehouse from '../models/Warehouse';

export const getWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouse.find({});
    res.json(warehouse);
  } catch (e) {
    console.log(e);
  }
};

export const createWarehouse = async (req, res) => {
  try {
    const warehouse = new Warehouse({
      items: req.body.items,
    });
    res.json(await warehouse.save());
  } catch (e) {
    console.log(e);
  }
};

export const updateWarehouse = async (req, res) => {
  const { id } = req.params;
  const {
    items,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No warehouse with id: ${id}`);

  const updatedWarehouse = {
    items,
    _id: id,
  };

  await Warehouse.findByIdAndUpdate(id, updatedWarehouse, { new: true });

  res.json(updatedWarehouse);
};

export const deleteWarehouse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No warehouse with id: ${id}`);

  await Warehouse.findByIdAndRemove(id);

  res.json({ message: 'Warehouse deleted successfully.' });
};
