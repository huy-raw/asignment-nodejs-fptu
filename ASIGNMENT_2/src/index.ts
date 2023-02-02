import createError from 'http-errors'
import path from 'path'
import cookieParser from 'cookie-parser'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import config from "./configs/config";


const app = express();


// view engine setup
app.set("views", path.join(__dirname, "views"));
// app.set('view engine', 'jade');
app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//set-up db
mongoose.set("strictQuery", false);
mongoose
  .connect(config.DB_URL, {
    dbName: "asignment-2",
    autoIndex: true
  })
  .then(() => {
    console.log("DMCS ===> Connect thanh cong");
  })
  .catch((error) => {
    console.log("Loi roi ne ==>", error);
  });


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
