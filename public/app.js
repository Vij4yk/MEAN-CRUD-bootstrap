'use strict'
let MyApp = 'MyApp'
let appModule = angular.module(MyApp, []);

appModule.controller('MainController', ['$scope', '$http', ($scope, $http) => {

    $scope.user = {};

    $http.get('/api/user').then((result)=>{
        $scope.user = result.data;
    }, (err)=>{
        alert(JSON.stringify(err))
    });

}])

appModule.filter('bind', () => {
    return (text) => {
        return text;
    }
})
