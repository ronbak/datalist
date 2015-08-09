(function() {

  var app = angular.module('test');

  app.service('contacts', function($scope, $http) {
    this.data = null;

    this.all = function($resource) {
      return $resource("/contacts");
    };

    this.byFirstName = function(firstName) {
      // 1. Query the API for a particular firstName
      // 2. If data received, return it
      // 3. Else, reject
    };

    this.refresh = function() {
      return this.all();
    };
  });

  app.factory('testFactory', ['$http', '$q', function($http, $q) {

    var getContact = function() {

        return parsePromise.promise;
      };

      return {
        getContact: getContact
      };
  }]);
}());
