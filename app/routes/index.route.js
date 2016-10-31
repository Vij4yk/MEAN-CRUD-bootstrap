'use strict'

let ctrl = require('../controllers/index.controller')

module.exports = function (app) {

    app.route("/")
        .get(ctrl.getRoute)
    app.route("/")
        .post(ctrl.postRoute);

}