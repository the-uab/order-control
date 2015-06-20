'use strict';
angular.module('seedApp')
.controller('categoryProductController', ['$scope', 'categoryProduct','$location','$window','$routeParams','$stateParams', '$state',
  function($scope, categoryProduct,$location,$window,$routeParams,$stateParams, $state) {
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

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            var url='#/almacen/categoriaProducto';
            //categoryProduct.save($scope.item);
           // $location.path('/categoriaProducto');
            $window.location.href=url;
        };
        
        //$scope.categoryProduct = UserFactory.show({id: $routeParams.id});
      var param1 = $routeParams.idCategoria;
      console.log

  }
]);
angular.module('seedApp')
.controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserFactory', '$location',
    function ($scope, $routeParams, UserFactory, $location) {

        // callback for ng-click 'updateUser':
        $scope.updateUser = function () {
            UserFactory.update($scope.user);
            $location.path('/categoriaProducto');
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/categoriaProducto-list');
        };

        $scope.user = UserFactory.show({id: $routeParams.id});
    }]);


