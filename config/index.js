const { NODE_ENV } = process.env;

const config = {
  production: {
    MONGO_URI: process.env.MONGO_URI_PRODUCTION,
  },
  staging: {
    MONGO_URI: process.env.MONGO_URI_STAGING,
  },
};

module.exports = config[NODE_ENV];
