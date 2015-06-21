'use strict';
angular.module('seedApp')
.controller('categoryProductController', ['$scope', 'categoryProduct','$location','$window','$routeParams','$stateParams', '$state',
  function($scope, categoryProduct,$location,$window,$routeParams,$stateParams, $state) {
    $scope.categoryProducts = [];
    $scope.categoryProductsEdit = [];
      categoryProduct.get({}, function(response) {
      console.log(response);
      $scope.categoryProducts = response;
    });
    $scope.item = {};

    $scope.savecategory = function(item) {
     console.log(item);
     item.ID_CATEGORIA_ITEM=0;
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
    $scope.btnEditarClick = function (item) {
        var url='#/almacen/editCategoria/';
            console.log(item);
        $window.location.href = url+item.ID_CATEGORIA_ITEM;
        
    }
    
        $scope.updateCategory = function (item) {
          var url='#/almacen/categoriaProducto';
          var idCategoria=$stateParams.idCategoria; 
            if (idCategoria>0) {
              item.ID_CATEGORIA_ITEM=idCategoria;
              categoryProduct.save(item);
              console.log(item);
            } 
            categoryProduct.get({}, function(response) {
              $scope.categoryProducts = response;
            });
           // $location.path('/categoriaProducto');
          $window.location.href=url;
        };

        $scope.cancel = function () {
            var url='#/almacen/categoriaProducto';
            //categoryProduct.save($scope.item);
           // $location.path('/categoriaProducto');
            $window.location.href=url;
        };
  }
]);

