"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var homeController = require("./controllers/home");
var test = require("./controllers/test");
var Services = require("./controllers");
var app = express();
mongoose.connect("mongodb://localhost:27017");
mongoose.connection.on("error", function () {
    console.log("MongoDB connection error. Please make sure MongoDB is running...");
    process.exit();
});
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", homeController.index);
app.post("/api/test", test.test);
app.post("/api/register", Services.register);
app.post("/api/login", Services.login);
app.post("/api/getUserInfo", Services.getUserInfo);
app.post("/api/setUserInfo", Services.setUserInfo);
module.exports = app;
