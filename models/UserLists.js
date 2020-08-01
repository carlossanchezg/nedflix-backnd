const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserListsSchema = new Schema({
  name_list: {
    type: String,
  },
  list_content: [{
    type: Schema.Types.ObjectId,
    ref: 'Movies',
  }],
});

const UserLists = mongoose.model('UserLists', UserListsSchema);

module.exports = { UserLists, UserListsSchema };
