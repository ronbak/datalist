(function() {

  var app = angular.module('test');

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
