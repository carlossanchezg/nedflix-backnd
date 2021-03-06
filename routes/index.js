const express = require('express');

const router = express.Router();

// Routes
router.use(require('./UsersRoutes'));
router.use(require('./MoviesRoutes'));
router.use(require('./UserListsRoutes'));
router.use(require('./AuthRoutes'));

module.exports = router;
