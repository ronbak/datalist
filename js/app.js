(function() {

  var app = angular.module('test', ["ngRoute"]);

  app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", {
          templateUrl: "partials/main.html",
          controller: "listCtrl"
        })
        .when("/edit/:firstname", {
          templateUrl: "partials/contact.html",
          controller: "userCtrl"
        })
        .otherwise({redirectTo:"/"});

  });

}());
