(function() {

  var app = angular.module('test');

  app.controller('contactsCtrl', function($scope, Contacts) {

    Contacts.all().then(function(data) {
      $scope.contacts = data.data;
    });
  });

}());
