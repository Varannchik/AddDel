var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'List of all users' });
});

router.get('/api/delete', function(req, res, next) {
  res.render('delete', { title: 'Delete users' });
  
});

router.get('/api/add', function(req, res, next) {
  res.render('add', { title: 'Add users' });

});

module.exports = router;
