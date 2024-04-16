var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Render the index page with title, details, and author information
  res.render('index', { title: 'Test MongoDB',details: 'To test, send post request with postman  to http://localhost:27017 page.',author:'@Tan Xiaoxu' });
});

module.exports = router;
