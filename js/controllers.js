(function() {

  var app = angular.module('test');

  app.controller('contactsCtrl', function($scope, $routeParams, ContactResource) {

    $scope.contacts = ContactResource.all().query();

  });

  app.controller('singleCtrl', function($scope, $routeParams, ContactResource) {

    $scope.singlecontact = ContactResource.single().query({firstname: $routeParams.firstname});

  });

}());
