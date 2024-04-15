const express = require('express');
const router = express.Router();
const authenticateToken = require('../jwt');
const Story = require('../models/Story');

// Get the count of stories by status
router.get('/count', async (req, res, next) => {
  try {
    const count = await Story.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(count);
  } catch (err) {
    next(err);
  }
});

// Create a new story
router.post('/', authenticateToken, async (req, res, next) => {
  try {
    const story = new Story({
      ...req.body,
      createdBy: req.user.id
    });
    const data = await story.save();
    res.status(201).json(data);
  } catch (err) {
    console.error(err); // Changed to console.error for better error logging
    next({ message: 'Error creating story', code: '0' }); // More descriptive error message
  }
});

// Get all stories
router.get('/', async (req, res, next) => {
  try {
    const data = await Story.find({});
    if (!data || data.length === 0) {
      return next({ message: 'No stories available', code: 5 }); // More descriptive message
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// Delete a story by ID
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const result = await Story.findByIdAndRemove(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Story not found' }); // Changed to 404 status with a descriptive message
    }
    res.status(200).json({ message: 'Story deleted successfully' }); // Added success message
  } catch (err) {
    next(err);
  }
});

module.exports = router;
