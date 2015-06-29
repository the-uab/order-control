'use strict';

angular.module('seedApp')
.controller('SysadminController', ['$scope', '$state', 'Person','Product',
  function($scope, $state, Person,Product) {
  	$scope.cerrarSession = function() {
  		$state.go('home')
  	}

  	$scope.persons = [];
    Person.get({}, function(response) {
      $scope.persons = response;
    });

    $scope.item = {};

   

     $scope.saveProduct = function(item) {
      Product.save(item, function(response) {
        $scope.products.push(response);
      });
    }

  }
]);
