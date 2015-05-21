'use strict';

angular.module('seedApp')
.controller('productController', ['$scope', 'Product',
  function($scope, Product) {
    $scope.products = [];
    Product.get({}, function(response) {
      console.log(response);
      $scope.products = response;
    });

    $scope.item = {};

   /* $scope.savePerson = function(item) {
      Product.save(item, function(response) {
        $scope.products.push(response);
      });
    }*/
  }
]);