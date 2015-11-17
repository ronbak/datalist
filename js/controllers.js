(function() {

  var app = angular.module('test');

  app.controller('contactsCtrl',
    function($scope, $routeParams, ContactResource) {
      $scope.contacts = ContactResource.all().query();

      $scope.currentPage = 0;
      $scope.pageSize = 5;

      $scope.numberOfPages=function(){
        return Math.ceil($scope.contacts.length/$scope.pageSize);
      }

  });

  app.controller('singleCtrl',
    function($scope, $routeParams, ContactResource) {
      $scope.singlecontact = ContactResource.single()
            .query({firstname: $routeParams.firstname});
  });

}());
