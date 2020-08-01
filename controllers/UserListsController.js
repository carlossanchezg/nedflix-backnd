const { UserListsService, UsersService } = require('../services');

module.exports = {
  createList: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const user = await UsersService.findUserById(id);
      const newList = await UserListsService.createList(body);
      const userWhitList = await UsersService.addList(user, newList);
      res.status(201).json(userWhitList);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
