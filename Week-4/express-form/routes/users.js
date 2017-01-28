var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let tam = req.query.nama.toLowerCase();
  console.log("Ini input " + req.query.nama);
  console.log("Ini output " + tam);
  res.render('form', { title: "Form", respond: tam});
});

module.exports = router;
