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
  getAllUserLists: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UsersService.findUserById(id);
      const lists = await UsersService.getUserLists(user);
      res.status(200).json(lists);
    } catch (error) {
      res.status(404).json(error);
    }
  },
  findOneUserListById: async (req, res) => {
    const { id } = req.params;
    const { list } = req.params;
    try {
      const user = await UsersService.findUserById(id);
      const userList = await UsersService.findListById(user, list);
      // const userList = await UsersService.findUserAndyourListById(id, list);
      res.status(200).json(userList);
    } catch (error) {
      res.status(404).json(error);
    }
  },
  updateList: async (req, res) => {
    const { id } = req.params;
    const { list } = req.params;
    const { body } = req;
    try {
      const user = await UsersService.findUserById(id);
      const foundList = await UsersService.findListById(user, list);
      // foundList.name_list = body.name_list;
      // user.save();
      const updatedList = await UsersService.updateList(user, foundList, body);
      res.status(200).json(updatedList);
    } catch (error) {
      res.status(404).json(error);
    }
  },
  deleteList: async (req, res) => {
    const { id } = req.params;
    const { list } = req.params;
    try {
      const user = await UsersService.findUserById(id);
      // const foundList = user.user_list.id(list);
      const foundList = await UsersService.findListById(user, list);
      // eslint-disable-next-line no-unused-vars
      const deletedList = await UsersService.deleteList(user, foundList);
      res.status(200).json({ message: 'Deleted list' });
    } catch (error) {
      res.status(404).json(error);
    }
  },
  addMovietoList: async (req, res) => {
    const { id } = req.params;
    const { list } = req.params;
    const { movie } = req.params;
    try {
      const user = await UsersService.findUserById(id);
      const foundList = await UsersService.findListById(user, list);
      const addMovie = await UsersService.addMovietoList(user, foundList, movie);
      res.status(200).json(addMovie);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  removeMovietoList: async (req, res) => {
    const { id } = req.params;
    const { list } = req.params;
    const { movie } = req.params;
    try {
      const user = await UsersService.findUserById(id);
      const foundList = await UsersService.findListById(user, list);
      // eslint-disable-next-line no-unused-vars
      const removedMovie = await UsersService.removeMovieToList(user, foundList, movie);
      res.status(200).json({ message: 'Deleted movie' });
    } catch (error) {
      res.status(404).json(error);
    }
  },
};
