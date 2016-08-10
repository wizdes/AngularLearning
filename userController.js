var myApp = angular.module('myApp');

var UserController = function ($scope, github, $routeParams) {

    var onReadComplete = function (responseData) {
        $scope.user = responseData;
    };

    $scope.username = $routeParams.username;
    github.getUser($scope.username).then(onReadComplete);
};

myApp.controller('UserController', ['$scope', 'github', '$routeParams', UserController]);