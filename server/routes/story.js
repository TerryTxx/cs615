const express = require('express');
const router = express.Router();
const authenticateToken = require('../jwt')

const Story = require('../models/Story');

// Get the count of stories for different statuses
router.get('/count', async (req, res, next) => {
  try {
    const count = await Story.aggregate([
      {
        $group: {
          _id: '$status',
          count: {$sum: 1}
        }
      }
    ]);
    res.json(count);
  } catch (err) {
    next(err);
  }
});

// Create a new story
router.post('/',authenticateToken, async (req, res, next) => {
  try {
    const story = new Story({
      ...req.body,
      createdBy: req.user.id
    });
    const data = await story.save();
    res.json(data);
  } catch (err) {
    console.log(err)
    next({message: 'Story not found', code: '0'});
  }
});

// Get all stories
router.get('/', async (req, res, next) => {
  try {
    const data = await Story.find({});
    if (!data || data.length === 0) {
      return next({message: 'no data', code: 5});
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// Delete a story
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const result = await Story.findByIdAndRemove(req.params.id);
    if (!result) {
      return res.json({status: '0'}); // Return 0 if already deleted
    }
    res.json({status: '1'});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
