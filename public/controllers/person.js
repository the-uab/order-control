'use strict';

angular.module('seedApp')
.controller('PersonController', ['$scope', 'Person',
  function($scope, Person) {
    $scope.persons = [];
    Person.get({}, function(response) {
      $scope.persons = response;
    });

    $scope.item = {};

    $scope.savePerson = function(item) {
      console.log(item);
      Person.save(item, function(response) {
        $scope.persons.push(response);
      });
    }
  }
]);
