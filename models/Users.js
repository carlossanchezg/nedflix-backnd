const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const { UserListsSchema } = require('./UserLists');

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
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  user_list: [UserListsSchema],
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

// eslint-disable-next-line func-names
UsersSchema.pre('save', function (next) {
  const user = this;
  const imgprofile = ['https://res.cloudinary.com/dyls6utsw/image/upload/v1594918579/nedflix%20project/nedflixavatar1_g4dc5j.png', 'https://res.cloudinary.com/dyls6utsw/image/upload/v1594918846/nedflix%20project/nedflixavatar2_pmpths.jpg', 'https://res.cloudinary.com/dyls6utsw/image/upload/v1594918857/nedflix%20project/nedflixavatar3_gz7oyf.png', 'https://res.cloudinary.com/dyls6utsw/image/upload/v1594918864/nedflix%20project/nedflixavatar4_e4ofdw.png', 'https://res.cloudinary.com/dyls6utsw/image/upload/v1594918872/nedflix%20project/nedflixavatar5_ssxbo4.png'];
  const randomImgprofile = imgprofile[Math.floor(Math.random() * imgprofile.length)];

  user.img_profile = randomImgprofile;
  return next();
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
