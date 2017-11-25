"use strict";
exports.__esModule = true;
var Article_1 = require("../models/Article");
var $findNot = { "_id": 0, "__v": 0 };
exports.publishArticle = function (req, res) {
    var _a = req.body, userName = _a.userName, nickname = _a.nickname, avatar = _a.avatar, title = _a.title, content = _a.content, date = _a.date;
    Article_1["default"].insertMany({ userName: userName, nickname: nickname, avatar: avatar, title: title, content: content, date: date }, function (err, doc) {
        if (err)
            throw err;
        if (doc) {
            res.send({
                message: "发表成功",
                error: false
            });
        }
        else {
            res.send({
                message: "发表失败",
                error: true
            });
        }
    });
};
exports.getArticles = function (req, res) {
    var userName = req.body.userName;
    var filter = userName ? { userName: userName } : {};
    Article_1["default"].find(filter, $findNot, function (err, doc) {
        if (err)
            throw err;
        if (doc) {
            res.send({
                message: "查询成功",
                error: false,
                data: doc
            });
        }
        else {
            res.send({
                message: "查询失败",
                error: true,
                data: []
            });
        }
    });
};
