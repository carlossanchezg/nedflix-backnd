const { Users } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const newUser = new Users(req.body);
      const saveUser = await newUser.save();
      res.status(201).json(saveUser);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await Users.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(404).json(error);
    }
  },
  findUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Users.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  },
};
