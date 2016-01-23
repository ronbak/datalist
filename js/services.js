var app = angular.module('test');

app.service('ContactResource', function($resource, $routeParams) {

  this.all = function() {
    return $resource('/contacts', {}, {
      'query' : { method: 'GET', isArray: true },
      'create': { method: 'POST'}
    }
  )};

  this.single = function() {
    return $resource('/contacts/:firstname', {firstname: '@firstname'}, {
      'query' : { method: 'GET', isArray: false },
      'update': { method: 'PUT', params: {firstname: '@firstname'}},
      'delete': { method: 'DELETE', params: {firstname: '@firstname'}}
    });
  }
});
