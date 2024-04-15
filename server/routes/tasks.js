const express = require('express');
const router = express.Router();
const authenticateToken = require('../jwt');
const Task = require('../models/Task');

// Create a new task
router.post('/', authenticateToken, (req, res) => {
  const task = new Task({
    ...req.body,
    createdBy: req.user.id
  });

  task.save()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

// Get the count of tasks by status
router.get('/counter', (req, res) => {
  Task.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 }
      }
    }
  ])
  .then(count => res.json(count))
  .catch(err => res.status(500).json(err));
});

// Get all tasks for the logged-in user
router.get('/', authenticateToken, (req, res) => {
  Task.aggregate([
    {
      $match: { createdBy: req.user.id }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'contributors',
        foreignField: '_id',
        as: 'contributors'
      }
    },
    {
      $unwind: '$contributors'
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          content: '$content',
          title: '$title',
          status: '$status',
          date: '$date',
          color: '$color',
          dueDate: '$dueDate',
          createdBy: '$createdBy'
        },
        contributors: { $push: '$contributors' }
      }
    },
    {
      $project: {
        _id: '$_id._id',
        content: '$_id.content',
        title: '$_id.title',
        status: '$_id.status',
        date: '$_id.date',
        dueDate: '$_id.dueDate',
        color: '$_id.color',
        createdBy: '$_id.createdBy',
        contributors: '$contributors'
      }
    }
  ])
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err));
});

// Get a single task by ID
router.get('/task/:id', (req, res) => {
  Task.aggregate([
    {
      $match: { _id: parseInt(req.params.id) }
    },
    // ... rest of the aggregation pipeline
  ])
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err));
});

// Update a task by ID
router.put('/update/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

// Delete a task by ID
router.delete('/delete/:id', (req, res) => {
  Task.findByIdAndRemove(req.params.id)
    .then(count => {
      if (!count) {
        return res.status(404).json({ status: '0' }); // Task not found
      }
      res.json({ status: '1' }); // Task deleted successfully
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
