var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/registration', function(req, res) {
   res.send(req.body);
});

router.post('/login', function(req, res) {
   res.send('login');
});

router.get('/validate', function(req, res) {
   res.send({
       error: true
   });
});

module.exports = router;
