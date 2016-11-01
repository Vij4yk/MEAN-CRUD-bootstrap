'use strict'
let MyApp = 'MyApp'
let appModule = angular.module(MyApp, []);

appModule.controller('MainController', ['$scope', '$http', ($scope, $http) => {

    $scope.baseURL = 'https://secretmeanstack.herokuapp.com/';
    // http://localhost:2020/
    document.getElementById("image").src = './img/no_image.png'
    $scope.user = {};

    $http.get('/api/user').then((result) => {
        $scope.user = result.data;
    }, (err) => {
        alert(JSON.stringify(err))
    });

    document.getElementById("files").onchange = function () {
        
        var reader = new FileReader();

        reader.onload = function (e) {
            // get loaded data and render thumbnail.
            document.getElementById("image").src = e.target.result;
        };

        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    };

}])

appModule.filter('bind', () => {
    return (text) => {
        return text;
    }
})
