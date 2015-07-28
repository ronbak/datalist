(function() {

  var app = angular.module('test');

  app.service('contacts', function() {
    this.data = null;

    this.all = function() {
      // 1. Check if we already have some data on this service
      // 2. If we have, return it
      // 3. If we don't have, make an HTTP request for all contacts
      // 4. Once fetched, you want to store in this.data
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

    var url = 'my-list.csv';

    var getContact = function() {

        var parsePromise = $q.defer();
        $http.get(url).success(function(data) {
            Papa.parse(data, {
                header: true,
                complete: function(results) {
                    parsePromise.resolve(results.data);
                }
            });
        });
        return parsePromise.promise;
      };

      return {
        getContact: getContact
      };
  }]);
}());
