'use strict';
angular.module('seedApp')
.controller('productController', ['$scope', 'Product', 'categoryProduct','$location','$window','$routeParams','$stateParams', '$state',
  function($scope, Product, categoryProduct,$location,$window,$routeParams,$stateParams, $state) {
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
     $scope.cancel = function () {
            var url='#/almacen/nuevo_producto';
            //categoryProduct.save($scope.item);
           // $location.path('/categoriaProducto');
            $window.location.href=url;
    }
    $scope.btnEditarClick = function (item) {
        var url='#/almacen/editProducto/';
            console.log(item);
        $window.location.href = url+item.ID_ITEM;
        
    }
    $scope.updateProduct = function (item) {
          var url='#/almacen/nuevo_producto';
          var idProducto=$stateParams.idProducto; 
            if (idProducto>0) {
              item.ID_ITEM=idProducto;
              Product.save(item);
              console.log(item);
            } 
            Product.get({}, function(response) {
              $scope.products = response;
            });
           // $location.path('/categoriaProducto');
          $window.location.href=url;
    }
  }
]);
