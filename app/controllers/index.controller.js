'use strict'

let users = require('mongoose').model('user');

exports.getRoute = function (req, res, next) {

    res.render('index');

}

exports.postRoute = function (req, res, next) {

}
