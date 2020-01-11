var express = require("express");
var router = express.Router();
var user = require("../public/javascripts/user");
/* GET users listing. */
router.get("/", function(req, res, next) {
  user.getUser().then(data => {
    res.send(data);
  });
});

module.exports = router;
