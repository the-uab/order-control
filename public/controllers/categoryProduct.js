'use strict';

angular.module('seedApp')
.controller('categoryProductController', ['$scope', 'categoryProduct',
  function($scope, categoryProduct) {
    $scope.categoryProduct = [];
    Product.get({}, function(response) {
      console.log(response);
      $scope.categoryProduct = response;
    });

    $scope.item = {};

   /* $scope.savePerson = function(item) {
      Product.save(item, function(response) {
        $scope.products.push(response);
      });
    }*/
  }
]);
