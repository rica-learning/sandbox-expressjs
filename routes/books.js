let express = require("express");
let router = express.Router();
let Book = require("../models/bookModel");

// router.get("/", (req, res) => {
//   res.json([
//     { id: "harry-potter", title: "Harry potter", author: "J.K Rowling" },
//     { id: "a-and-d", title: "Angels and Demons", author: "Dan Brown" }
//   ]);
// });

router.get("/", async (req, res) => {
  let books = await Book.find();

  res.json(books);
});

router.get("/:id", async (req, res) => {
  var id = req.params.id;
  let book = await Book.findOne({ _id: id });

  res.json(book);
});

module.exports = router;
