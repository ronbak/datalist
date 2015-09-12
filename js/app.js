(function() {

  var app = angular.module('test', ['ngRoute', 'ngResource']);

  app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", {
          templateUrl: "partials/main.html",
          controller: "contactsCtrl"
        })
        .when("/:firstname", {
          templateUrl: "/partials/contact.html",
          controller: "singleCtrl"
        })
        .otherwise({redirectTo:"/"});
  });
}());
