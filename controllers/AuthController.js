const { UsersService } = require('../services');
const { comparePasswords, createToken } = require('../utils');

module.exports = {
  register: async (req, res) => {
    try {
      const newUser = await UsersService.create(req.body);
      const token = createToken(newUser);
      if (!token) res.status(400).json({ message: 'Error creatign token' });
      // newUser.password = undefined;
      res.status(201).json({ message: 'Succesfull', token });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UsersService.findUserByEmail(email);
      if (!user) res.status(404).json({ message: 'Email or password incorrect' });

      const comparedPasswords = await comparePasswords(password, user.password);
      if (!comparedPasswords) res.status(404).json({ message: 'Email or password incorrect' });

      const token = createToken(user);
      if (!token) res.status(400).json({ message: 'Error creatign token' });

      res.status(200).json({ message: 'Succesfull login', token });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
