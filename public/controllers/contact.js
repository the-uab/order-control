'use strict';

angular.module('seedApp')
.controller('ContactController', ['$scope',
  function($scope) {
    var developersList = [
      {
        name: 'Dev',
        url: 'home.contact.dev'
      }
    ];

    $scope.developers = developersList;
  }
]);
