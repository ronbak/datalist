(function() {

  var app = angular.module('test');

  app.service('Contacts', function($http) {

    this.all = function() {
      return $http.get('/contacts');
    }

  });
}());
