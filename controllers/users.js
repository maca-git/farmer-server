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
    });
    res.json(await user.save());
  } catch (e) {
    console.log(e);
  }
};
