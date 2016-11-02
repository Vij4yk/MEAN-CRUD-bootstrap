'use strict'

let mainApp = angular.module('MainApp', []);


mainApp.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('mainPage', {
            url: '/',
            templateUrl: '/modules/main/views/layout.jade'
        })

    // $urlRouterProvider.ortherwise('/');

}])