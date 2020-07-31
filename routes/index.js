const express = require('express');

const router = express.Router();

// Routes
router.use(require('./UsersRoutes'));
router.use(require('./MoviesRoutes'));

module.exports = router;
