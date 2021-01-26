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
