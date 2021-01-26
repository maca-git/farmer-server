import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  buyPrice: {
    type: Number,
    required: true,
  },
  ripeningTime: {
    type: Number,
    required: true,
  },
  ripeningsCount: {
    type: Number,
  },
  countPerItem: {
    type: Number,
    required: true,
  },
  pricePerItem: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
