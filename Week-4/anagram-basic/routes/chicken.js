var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {title: 'Anagrams Chicken'});
});

module.exports = router;
