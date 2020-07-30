const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const { Schema } = mongoose;

const UsersSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  user_list: [{
    name_list: {
      type: String,
    },
    list_content: [{
      type: Schema.Types.ObjectId,
      ref: 'Movies',
    }],
  }],
  is_active: {
    type: Boolean,
    default: true,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  img_profile: {
    type: String,
  },
});

// eslint-disable-next-line func-names
UsersSchema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  // eslint-disable-next-line consistent-return
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (errHash, hash) => {
      if (errHash) return next(errHash);

      // override the cleartext password with the hashed one
      user.password = hash;
      return next();
    });
  });
  return false;
});