var app = angular.module('test');

app.controller('listCtrl',
  function($scope, $routeParams, ContactResource) {
    // Get all contacts
    $scope.contacts = ContactResource.all().query();

    // Add contact
    $scope.createContact = function() {
      $scope.contacts.push({
        firstname: $scope.contacts.firstname,
        lastname: $scope.contacts.lastname
      });

      // Clear input fields after push
      $scope.contacts.firstname = '';
      $scope.contacts.lastname = '';
      console.log('Contact was added');
      // reset state
      $scope.isEditing = false;
    };

    // delete contact
    $scope.deleteContact = function(contact) {
      var removed = $scope.contacts.indexOf(contact);
      $scope.contacts.splice(removed, 1);
      console.log('Contact was delete');
    }

    // States
    $scope.isEditing = false;

    $scope.startEditing = function() {
      $scope.isEditing = true;
      console.log('started editing');
    }

    $scope.cancelEditing = function() {
      $scope.isEditing = false;
    }

    $scope.showEditing = function() {
      return $scope.isEditing;
    }

    //Set the pagination
    $scope.currentPage = 0;
    $scope.pageSize = 5;

    $scope.numberOfPages = function(){
      return Math.ceil($scope.contacts.length/$scope.pageSize);
    }
});
