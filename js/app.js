(function() {

  var app = angular.module('test', ["ngRoute"]);

  app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/contacts", {
          templateUrl: "partials/main.html",
          controller: "listCtrl"
        })
        .when("/edit/:firstname", {
          templateUrl: "contact.html",
          controller: "listCtrl"
        })
        .otherwise({redirectTo:"/"});

  });
}());
