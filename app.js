(function(){
    // the stuff inside the [] is another module that this module (myApp) has a dependency on
    var app = angular.module("myApp", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
        .when("/main", {
            templateUrl: "main.html",
            controller: "MainController"
        })
        .when("/user/:username",{
            templateUrl:"user.html",
            controller:"UserController"
        })
        .otherwise({redirectTo:"/main"})
    });
    
}());