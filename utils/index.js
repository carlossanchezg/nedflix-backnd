const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  comparePasswords: (loggedPassword, registeredPassword) => bcrypt
    .compare(loggedPassword, registeredPassword),
  createToken: (user) => {
    const payload = {
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      email: user.email,
      first_name: user.first_name,
      img_profile: user.img_profile,
      premium: user.premium,
    };
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      return token;
    } catch (error) {
      return undefined;
    }
  },
};
