const express = require('express');

const router = express.Router();

const { UsersController } = require('../controllers');
// CRUD
// CREATE
router.post('/users', UsersController.create);

// READ (ALL)
// router.get('/users', async (req, res) => {
//   try {
//     const users = await Users.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(404).json(error);
//   }
// });

module.exports = router;
