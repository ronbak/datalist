var app = angular.module('test');

app.directive('listOfContacts', function() {
  return {
    restrict: 'EA',
    templateUrl: 'common/list/partial/list.html'
  };
});
