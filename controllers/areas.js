import mongoose from 'mongoose';
import Area from '../models/Area';

export const getAreas = async (req, res) => {
  try {
    const areas = await Area.find({});
    res.json(areas);
  } catch (e) {
    console.log(e);
  }
};

export const createArea = async (req, res) => {
  try {
    const area = new Area({
      item: req.body.item,
      enabled: req.body.enabled,
    });
    res.json(await area.save());
  } catch (e) {
    console.log(e);
  }
};

export const updateArea = async (req, res) => {
  const { id } = req.params;
  const {
    item,
    enabled,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No area with id: ${id}`);

  const updatedArea = {
    item,
    enabled,
    _id: id,
  };

  await Area.findByIdAndUpdate(id, updatedArea, { new: true });

  res.json(updatedArea);
};

export const deleteArea = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No area with id: ${id}`);

  await Area.findByIdAndRemove(id);

  res.json({ message: 'Area deleted successfully.' });
};
