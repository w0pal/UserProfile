const userController = require('../controllers/user-controllers');

const express = require('express');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.addUser);
router.put('/:id', userController.deleteUserById)
router.delete('/:id', userController.deleteUserById)

module.exports = router;

