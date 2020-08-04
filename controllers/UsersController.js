const { UsersService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const newUser = await UsersService.create(req.body);
      newUser.password = undefined;
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  // getUsers: async (req, res) => {
  //   try {
  //     const users = await UsersService.getUsers();
  //     res.status(200).json(users);
  //   } catch (error) {
  //     res.status(404).json(error);
  //   }
  // },
  findUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const foundUser = await UsersService.findUserById(id);
      foundUser.password = undefined;
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(404).json(error);
    }
  },
  findUserByIdandUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const updatedUser = await UsersService.findUserByIdandUpdate(id, body);
      updatedUser.password = undefined;
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(404).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await UsersService.deleteUser(id);
      res.status(200).json({ message: 'Deleted user' });
    } catch (error) {
      res.status(404).json(error);
    }
  },
};
