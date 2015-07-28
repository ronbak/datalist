(function() {

  var app = angular.module('test');

  app.controller('listCtrl', ['$scope', 'testFactory', '$location', function($scope, testFactory, $location) {

    testFactory.getContact().then(function(data) {
         $scope.contacts = data;
     });

  }]);

  app.controller('userCtrl', ['$scope', '$routeParams', function($scope, $routeParams, users) {
    // users.byFirstName($routeParam.firstname)
    //   .then(function(result) {
    //     $scope.user = result;
    //   });
  }]);

}());
