'use strict';
angular.module('seedApp')
.controller('categoryProductController', ['$scope', 'categoryProduct',
  function($scope, categoryProduct) {
    $scope.categoryProducts = [];
    categoryProduct.get({}, function(response) {
      console.log(response);
      $scope.categoryProducts = response;
    });
    $scope.item = {};
    $scope.savecategory = function(item) {
     console.log(item);
      categoryProduct.save(item, function(response) {
      $scope.categoryProducts.push(response);
      });
     }
  $scope.deletecategory = function (categoryProduct,idx) {
        console.log(categoryProduct);
        categoryProduct.$delete({ "ID_CATEGORIA_ITEM": categoryProduct.ID_CATEGORIA_ITEM }, function (success) {
        console.log(success);
        $scope.categoryProducts.splice(idx, 1);
        });
    }
  }
]);
