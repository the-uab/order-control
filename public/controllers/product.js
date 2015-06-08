'use strict';
angular.module('seedApp')
.controller('productController', ['$scope', 'Product', 'categoryProduct',
  function($scope, Product, categoryProduct) {
    $scope.products = [];
    Product.get({}, function(response) {
      console.log(response);
      $scope.products = response;
    });
    categoryProduct.get({}, function(response) {
      console.log(response);
      $scope.categorias = response;
    });

    $scope.item = {};
    
    $scope.saveProduct = function(item) {
      console.log(item);
      Product.save(item, function(response) {
      $scope.products.push(response);
      console.log(response);
      });
    }
     $scope.deleteProduct = function (product,idx) {
        console.log(product);
        product.$delete({ "ID_ITEM": product.ID_ITEM }, function (success) {
        console.log(success);
        $scope.products.splice(idx, 1);
        });
    }

  }
]);
