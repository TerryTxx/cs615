const express = require('express');
const router = express.Router();
const authenticateToken = require('../jwt')

const Story = require('../models/Story');

// 获取不同状态的故事计数
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

// 创建新故事
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

// 获取所有故事
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

// 删除故事
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const result = await Story.findByIdAndRemove(req.params.id);
    if (!result) {
      return res.json({status: '0'}); // 如果已被删除，则返回0
    }
    res.json({status: '1'});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
