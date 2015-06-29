'use strict';

angular.module('seedApp')
.controller('ModalInstanceCtrl', function ($scope, $modalInstance, product) {

  $scope.product = product;
  $scope.save = function () {
    //$modalInstance.close($scope.selected.item);
    $scope.product.$update({'ID_ITEM':$scope.product.ID_ITEM}, function(response){
      
    });
    $modalInstance.dismiss('cancel');    
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});