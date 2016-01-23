var app = angular.module('test');

app.directive('search', function() {
  return {
    restrict: 'EA',
    templateUrl: 'common/search/partial/search.html'
  };
});
