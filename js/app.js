var app = angular.module('test', [
  'ngRoute',
  'ngResource'
]);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "listCtrl"
      })
      .when("/:firstname", {
        templateUrl: "/views/contact.html",
        controller: "singleCtrl"
      })
      .otherwise({redirectTo:"/"});
});
