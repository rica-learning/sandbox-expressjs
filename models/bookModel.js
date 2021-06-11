let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bookSchema = new Schema({
  _id: { type: String, required: true },
  title: String,
  author: String
});

module.exports = mongoose.model("Book", bookSchema);
