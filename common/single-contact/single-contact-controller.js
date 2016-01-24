app.controller('singleCtrl',
  function($scope, $routeParams, ContactResource) {
    // Get single contact
    $scope.singlecontact = ContactResource.single()
          .get({firstname: $routeParams.firstname});
    console.log($scope.singlecontact);
});
