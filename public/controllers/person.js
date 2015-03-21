'use strict';

angular.module('seedApp')
.controller('PersonController', ['$scope', 'Person',
  function($scope, Person) {
    $scope.persons = [];
    Person.get({}, function(response) {
      $scope.persons = response;
    });

  }
]);
