const Users = require('../models/Users');

module.exports = {
  create: (body) => {
    const newUser = new Users(body);
    return newUser.save();
  },
  getUsers: () => Users.find(),
  findUserById: (id) => Users.findById(id),
  findUserByIdandUpdate: (id, body) => Users.findByIdAndUpdate(id, body, { new: true }),
  deleteUser: (id) => Users.findByIdAndDelete(id),
  addList: (user, list) => {
    user.user_list.push(list);
    return user.save();
  },
};
