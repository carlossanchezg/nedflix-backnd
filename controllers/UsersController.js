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
};
