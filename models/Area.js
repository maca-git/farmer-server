import mongoose from 'mongoose';
import Item from './Item';

const areaSchema = mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Item,
  },
  enabled: {
    type: Boolean,
    required: true,
  },
});

const Area = mongoose.model('Area', areaSchema);

export default Area;
