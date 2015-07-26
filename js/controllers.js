(function() {

  var app = angular.module('test');

  app.controller('testCtrl', ['$scope', 'testFactory', '$location', function($scope, testFactory, $location) {

    testFactory.getContact().then(function(data) {
         $scope.contacts = data;
     });

     $scope.edit = function(firstname) {
       $location.path('edit/' + firstname);
     };

  }]);

  app.controller('userCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

      $scope.user = $scope.contacts[$routeParams.firstname];
  }]);

}());
