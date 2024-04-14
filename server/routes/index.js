var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test MongoDB',details: 'To test, send post request with postman  to http://localhost:27017/user page.',author:'@Tan' });
});

module.exports = router;
