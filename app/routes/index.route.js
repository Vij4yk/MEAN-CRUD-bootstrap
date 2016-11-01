'use strict'

let ctrl = require('../controllers/index.controller')

module.exports = function (app) {

    app.route("/")
        .get(ctrl.getRoute)
        .post(ctrl.postRoute);
}