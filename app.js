// Node hub 2020

let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

let mongodb =
  "mongodb+srv://mern-user-readwrite:etxV-bYxNA6KMKqKEYTs@workshop.1ceyb.mongodb.net/Mern?retryWrites=true&w=majority";
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let booksRouter = require("./routes/books");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/books", booksRouter);

let listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
