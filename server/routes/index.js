const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Test MongoDB',
    details: 'To test, send a POST request with Postman to http://localhost:27017/user page.',
    author: '@Tan'
  });
});

module.exports = router;
