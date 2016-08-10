var myApp = angular.module('myApp');

var MainController = function ($scope, $interval, $location) {

    var countUp = function () {
        $scope.countUp++;
    };

    var startCountUp = function () {
        countDownIntervalTask = $interval(countUp, 1000);
    };

    $scope.cancelCountUp = function () {
        if (countDownIntervalTask) {
            $interval.cancel(countDownIntervalTask);
        }
        $location.path("/user/wizdes");
    }

    var onReadComplete = function (responseData) {
        $scope.user = responseData;
    };

    $scope.message = "Foo bar message";
    $scope.countUp = 0;
    var countDownIntervalTask;
    startCountUp();
};

myApp.controller('MainController', ['$scope', '$interval', '$location', MainController]);