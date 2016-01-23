var app = angular.module('test');

app.controller('listCtrl',
  function($scope, $routeParams, ContactResource) {
    $scope.contacts = ContactResource.all().query();

    $scope.currentPage = 0;
    $scope.pageSize = 5;

    $scope.numberOfPages = function(){
      return Math.ceil($scope.contacts.length/$scope.pageSize);
    }
});
