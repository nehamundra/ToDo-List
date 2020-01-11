var express = require("express");
var router = express.Router();
var todo = require("../public/javascripts/todo");

/* GET home page. */
router.get("/", function(req, res, next) {
  todo
    .printData()
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(error => {
      console.log("Error:" + error);
    });
});

router.post("/edit", function(req, res, next) {
  todo
    .editData(req.body)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(error => {
      console.log("Error:" + error);
    });
});

module.exports = router;
