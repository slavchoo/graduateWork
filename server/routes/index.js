var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send({
      version: '0.1'
  })
});

module.exports = router;
