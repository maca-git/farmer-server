import mongoose from 'mongoose';
import User from '../models/User';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    console.log(e);
  }
};

export const createUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      login: req.body.login,
      password: req.body.password,
      coins: req.body.coins,
      level: req.body.level,
    });
    res.json(await user.save());
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    login,
    password,
    coins,
    level,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

  const updatedUser = {
    name,
    login,
    password,
    coins,
    level,
    _id: id,
  };

  await User.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

  await User.findByIdAndRemove(id);

  res.json({ message: 'User deleted successfully.' });
};
