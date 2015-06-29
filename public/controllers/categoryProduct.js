'use strict';
angular.module('seedApp')
.controller('categoryProductController', ['$scope', 'categoryProduct', '$modal','$log',
  function($scope, categoryProduct,$modal,$log) {
    $scope.categoryProducts = [];
    categoryProduct.get({}, function(response) {
      //console.log(response);
      $scope.categoryProducts = response;
    });
    $scope.item = {};

    $scope.savecategory = function(item) {
     //console.log(item);
      categoryProduct.save(item, function(response) {
      $scope.categoryProducts.push(response);
      });
     }
    $scope.deletecategory = function (categoryProduct,idx) {
       // console.log(categoryProduct);
        categoryProduct.$delete({ "ID_CATEGORIA_ITEM": categoryProduct.ID_CATEGORIA_ITEM }, function (success) {
        console.log(success);
        $scope.categoryProducts.splice(idx, 1);
        });
    }
    $scope.updateCategoryProduct = function(categoryProduct) {
      console.log(categoryProduct);
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'categoryModal',
        controller: 'ModalInstanceCtrl',
        size: 'ln',
        resolve: {
          categoryProduct: function() {
            return categoryProduct;
          }
        }
      });
      modalInstance.result.then(function(selectedItem) {
        $scope.selected = selectedItem;
      }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }
  }
]);
