var express = require('express');
var router = express.Router();
const info = [
      {name:'Petya'},
      {name:'John Doe'},
      {name:'Angus Yung'}
    ]
router.get('/users', function(req, res, next) {
  res.send({ users:info});

});

router.post('/delete', function(req, res, next) {  
  res.send({ok});
});

router.post('/add', function(req, res, next) {   
  res.send({ok});
});

module.exports = router;