const userController = require('../controllers/user-controllers');

const express = require('express');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;