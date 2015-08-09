(function() {

  var app = angular.module('test');

  app.controller('listCtrl', ['$scope', 'contacts', '$location', function($scope, contacts, $location) {

    this.all().then(function(data) {
         $scope.contacts = data;
         console.log(data);
     });

  }]);

  app.controller('userCtrl', ['$scope', '$routeParams', function($scope, $routeParams, users) {
    // users.byFirstName($routeParam.firstname)
    //   .then(function(result) {
    //     $scope.user = result;
    //   });
  }]);

}());
