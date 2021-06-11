var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let user = {
    name: "Rica",
    gender: "female"
  };

  res.json([user]);
});

module.exports = router;
