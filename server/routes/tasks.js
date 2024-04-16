const express = require('express');
const router = express.Router();
const authenticateToken = require('../jwt')
<<<<<<< Updated upstream

const Task = require('../models/Task');
// Create a new task

=======
// Import JWT authentication middleware
const Task = require('../models/Task');

// Endpoint to create a new task
>>>>>>> Stashed changes
router.post('/',authenticateToken,(req,res,next)=>{
  const task = new Task({
    ...req.body,
    createdBy: req.user.id
    // Attach the user ID from JWT to the createdBy field
  });
  const promise = task.save();
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
})

<<<<<<< Updated upstream
// Show the count of tasks for each status
=======

// Endpoint to retrieve the count of tasks for each status
>>>>>>> Stashed changes
router.get('/counter',(req,res)=>{
  const promise = Task.aggregate([
    {
      $group:{
        _id:'$status',
        count:{$sum:1}
      }
    }
  ])
  promise.then((count)=>{
    res.json(count)
  }).catch((err)=>{
    res.json(err)
  })
})

<<<<<<< Updated upstream
// Get all tasks
=======
// Endpoint to retrieve tasks created by the authenticated user
>>>>>>> Stashed changes
router.get('/', authenticateToken, (req, res) => {
  console.log(req.user.id)
  const promise = Task.aggregate([
    {
      $match: {
        createdBy: req.user.id  // Use createdBy field to match user ID from JWT
      }
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
      $unwind: {
        path: '$contributors'
      }
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
        contributors: {
          $push: '$contributors'
        }
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
  ]);
<<<<<<< Updated upstream

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});
// Get a single task by ID
=======

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});


// Endpoint to retrieve a single task by its ID
>>>>>>> Stashed changes
router.get('/task/:id',(req,res)=>{
  const promise = Task.aggregate([
    {
      $match:{
        _id:  parseInt(req.params.id)
      }
    },
    {
      $lookup:{
        from:'users',
        localField:'contributors',
        foreignField:'_id',
        as:'contributors'
      }
    },
    {
      $unwind:{
        path:'$contributors'
      }
    },
    {
      $group:{
        _id:{
          _id:'$_id',
          content:'$content',
          title:'$title',
          status:'$status',
          date:'$date',
          color:'$color',
          dueDate:'$dueDate',
          createdBy:'$createdBy'
        },
        contributors:{
<<<<<<< Updated upstream
        $push:'$contributors'
    }
  }
  },
=======
          $push:'$contributors'
        }
      }
    },
>>>>>>> Stashed changes
    {
      $project:{
        _id:'$_id._id',
        content:'$_id.content',
        title:'$_id.title',
        status:'$_id.status',
        date:'$_id.date',
        dueDate:'$_id.dueDate',
        color:'$_id.color',
        createdBy: '$_id.createdBy',
        contributors: '$contributors',
      }
    }
  ]);
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
})
<<<<<<< Updated upstream
// Update a task
router.put('/update/:id',(req,res)=>{
  const promise = Task.findByIdAndUpdate(req.params.id,req.body);
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
})

// Delete a task
router.delete('/delete/:id',(req,res)=>{
  const promise = Task.findByIdAndRemove(req.params.id)
  promise.then((count)=>{
    if(count==null)
      res.json({status:'0'})//zaten silinmiş ise 0
    res.json({status:'1'})
  }).catch((err)=>{
    res.json(err)
  })
})
=======
//todo
>>>>>>> Stashed changes

// Endpoint to update a task
router.put('/update/:id',(req,res)=>{
  const promise = Task.findByIdAndUpdate(req.params.id,req.body);
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
})



// Endpoint to delete a task
router.delete('/delete/:id',(req,res)=>{
  const promise = Task.findByIdAndRemove(req.params.id)
  promise.then((count)=>{
    if(count==null)
      res.json({status:'0'})//If the task is already deleted
    res.json({status:'1'})
  }).catch((err)=>{
    res.json(err)
  })
})

module.exports = router;