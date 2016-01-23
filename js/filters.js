var app = angular.module('test');

app.filter('startFrom', function() {
  return function(input, start) {
      start = +start;
      return input.slice(start);
  };
});
