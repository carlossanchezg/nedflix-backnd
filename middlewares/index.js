const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: (req, res, next) => {
    // eslint-disable-next-line no-console
    console.log(req.headers);
    // eslint-disable-next-line max-len
    // authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGRlN2E3MjcyNGE3MDg0YTNjMGQyMCIsImVtYWkiOiJTbGlua3lAbGl2ZS5jb20iLCJmaXJzdF9uYW1lIjoiU2xpbmt5IiwiaWF0IjoxNTk0NzY2NzM4fQ.y9vYOE-JVJ3blSoQ4PTRDfCrC3ySPjg4gNTZ3RsZRpw'
    try {
      const { authorization } = req.headers;
      const token = authorization.split(' ')[1]; // -> ["[0]Bearer", "[1]eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"]
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // eslint-disable-next-line no-console
      console.log(decoded);
      req.decoded = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Auth error', error });
    }
  },
};
