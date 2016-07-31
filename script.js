var myApp = angular.module('myApp', []);

var controllerFunc = function ($scope, $http) {
    
    var onReadComplete = function(response){
        $scope.user = response.data;
    }
    
    $http.get("https://api.github.com/users/wizdes").then(onReadComplete);
    $scope.message = "Foo bar message";
};

myApp.controller('MainController', ['$scope', '$http', controllerFunc]);