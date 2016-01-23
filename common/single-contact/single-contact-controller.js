var app = angular.module('test');

app.controller('singleCtrl',
  function($scope, $routeParams, ContactResource) {
    $scope.singlecontact = ContactResource.single()
          .query({firstname: $routeParams.firstname});

});
