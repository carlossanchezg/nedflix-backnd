const Users = require('../models/Users');

module.exports = {
  create: (body) => {
    const newUser = new Users(body);
    return newUser.save();
  },
  findAllUsers: () => Users.find(),
};
