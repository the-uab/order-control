'use strict';

angular.module('seedApp')
.controller('PedidosController', ['$scope',
  function($scope) {
  
    $scope.pedidos = [];

    $scope.guardarPedidos = function(item) {
      console.log(item);
      var newItem = {
        detalle: item.detalle, 
        cantidad: item.cantidad,
        precio: item.precio,
      };
      $scope.pedidos.push(newItem);
    }

    $scope.eliminarPedidos = function(index) {
      console.log(index);
      $scope.pedidos.splice(index, 1);      
    }
  }
]);