'use strict'

let users = require('mongoose').model('user');

exports.getRoute = function (req, res, next) {

    res.render('index', { image: req.image });

}

exports.postRoute = function (req, res, next) {

}
