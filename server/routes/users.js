const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Endpoint to create a new user
router.post('/', async (req, res, next) => {
  try {
    const user = new User(req.body);
    const data = await user.save();
    res.status(201).json(data); // Send a 201 status code for resource creation
  } catch (err) {
    next({ message: 'User creation failed', code: '0', error: err });
  }
});

// Endpoint to retrieve all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});
    if (!users.length) {
      return res.status(404).json({ message: 'No users found', code: 5 }); // Send a 404 status code when no users are found
    }
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// Endpoint to delete a user by ID
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const result = await User.findByIdAndRemove(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'User not found', status: '0' }); // Send a 404 status code when the user is not found
    }
    res.json({ message: 'User deleted successfully', status: '1' }); // Include a success message upon deletion
  } catch (err) {
    next(err);
  }
});

module.exports = router;
