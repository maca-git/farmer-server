import mongoose from 'mongoose';
import { itemSchema } from './Item';

const warehouseSchema = mongoose.Schema({
  items: [{
    item: itemSchema,
    amount: {
      type: Number,
    },
  }],
});

const Warehouse = mongoose.model('Warehouse', warehouseSchema);

export default Warehouse;
