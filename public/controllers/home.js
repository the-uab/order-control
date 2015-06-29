'use strict';

angular.module('seedApp')
.controller('HomeController', ['$scope',
  function($scope) {
  	$scope.saveProduct = function(item) {
      Product.save(item, function(response) {
        $scope.products.push(response);
      });
    }
  }
]);
