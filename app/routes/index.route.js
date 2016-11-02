'use strict'

let ctrl = require('../controllers/index.controller')

module.exports = function (app) {

    app.route("/")
        .get(ctrl.getRoute)
        .post(ctrl.postRoute);

    app.route("/login")
        .get(ctrl.renderLogin)
        .post(ctrl.login);
}