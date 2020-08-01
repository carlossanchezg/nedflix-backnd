const { UserLists } = require('../models/UserLists');

module.exports = {
  createList: (body) => {
    const newList = new UserLists(body);
    return newList;
  },
};
