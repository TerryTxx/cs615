const express = require('express');
const router = express.Router();

const User = require('../models/User');

// Create a new user
router.post('/', async (req, res, next) => {
  try {
    const user = new User(req.body);
    const data = await user.save();
    res.json(data);
  } catch (err) {
    // Pass error to middleware
    next({ message: 'User creation failed', code: '0' });
  }
});

// Get all users
router.get('/', async (req, res, next) => {
  try {
    const data = await User.find({});
    if (!data || data.length === 0) {
      return next({ message: 'No users found', code: 5 });
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// Delete a user
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const result = await User.findByIdAndRemove(req.params.id);
    if (!result) {
      return res.json({ status: '0' }); // 如果用户已被删除，则返回0
    }
    res.json({ status: '1' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
