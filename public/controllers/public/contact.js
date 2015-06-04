'use strict';

angular.module('seedApp')
.controller('ContactController', ['$scope',
  function($scope) {
    var developersList = [
      {
          name: 'Dev',
          url: 'home.contact.dev'
      },
      {
        name:'Vivian',
        url: 'home.contact.Vivian'
      },
      {
        name:'mariouab',
        url: 'home.contact.mariouab'
      },
      {
        name:'elias',
        url: 'home.contact.elias'
      },
      {
        name:'ronald',
        url: 'home.contact.ronald'
      }
    ];

    $scope.developers = developersList;
  }
]);
