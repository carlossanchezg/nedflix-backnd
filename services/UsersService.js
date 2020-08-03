/* eslint-disable eqeqeq */
const Users = require('../models/Users');

module.exports = {
  create: (body) => {
    const newUser = new Users(body);
    return newUser.save();
  },
  getUsers: () => Users.find(),
  findUserById: (id) => Users.findById(id).populate({
    path: 'user_list',
    populate: {
      path: 'list_content',
    },
  }),
  findUserByIdandUpdate: (id, body) => Users.findByIdAndUpdate(id, body, { new: true }),
  deleteUser: (id) => Users.findByIdAndDelete(id),
  addList: (user, list) => {
    user.user_list.push(list);
    return user.save();
  },
  // findUserAndyourListById: (userid, listId) => {
  //   const foundUser = Users.findById(userid);
  //   const foundList = foundedUser.user_list.id(listId);
  //   return foundList;
  // },
  findListById: (user, listId) => {
    const foundList = user.user_list.id(listId);
    return foundList;
  },
  getUserLists: (user) => {
    const UserLists = user.user_list.map((list) => list);
    return UserLists;
  },
  updateList: (user, list, body) => {
    // eslint-disable-next-line no-param-reassign
    list.name_list = body.name_list;
    return user.save();
  },
  deleteList: (user, list) => {
    // eslint-disable-next-line no-underscore-dangle
    const removedList = user.user_list.filter((listfound) => listfound._id !== list._id);
    // eslint-disable-next-line no-param-reassign
    user.user_list = removedList;
    return user.save();
  },
  addMovietoList: (user, list, movie) => {
    // const foundList = user.user_list.id(list);
    list.list_content.push(movie);
    return user.save();
  },
  removeMovieToList: (user, list, movie) => {
    // eslint-disable-next-line no-underscore-dangle
    const removedMovie = list.list_content.filter((film) => film._id != movie);
    // eslint-disable-next-line no-param-reassign
    list.list_content = removedMovie;
    return user.save();
  },
};
