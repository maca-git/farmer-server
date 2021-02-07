import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  coins: {
    type: Number,
    required: true,
    default: 10000,
  },
  level: {
    type: Number,
    required: true,
    default: 1,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
