var app = angular.module('test');

app.directive('singleContact', function() {
  return {
    restrict: 'EA',
    templateUrl: 'common/single-contact/partial/single-contact.html'
  };
});
