var app = angular.module('test');

app.directive('pagination', function() {
  return {
    restrict: 'EA',
    templateUrl: 'common/pagination/partial/pagination.html'
  };
});
