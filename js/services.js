(function() {

  var app = angular.module('test');

  app.service('ContactResource', function($resource, $routeParams) {

    this.all = function() {
      return $resource('/contacts', {},
      {'query': { method: 'GET', isArray: true }}
    )};

    this.single = function() {
      return $resource('/contacts/:firstname', {firstname: '@firstname'},
        {'query': { method: 'GET', isArray: false }}
      );
    }
  });

}());
