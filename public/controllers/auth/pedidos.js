'use strict';

angular.module('seedApp')
.controller('PedidosController', ['$scope',
  function($scope) {

    $scope.pedidos = [];

    $scope.guardarPedidos = function(item) {
      console.log(item);
      var newItem = {
        codigo: item.codigo,
        producto: item.producto,
        cantidad: item.cantidad,
        descripcion: item.descripcion,
        costototal: item.costototal,
        costounitario: item.costounitario,
      };
      $scope.pedidos.push(newItem);
    }

    $scope.eliminarPedidos = function(index) {
      console.log(index);
      $scope.pedidos.splice(index, 1);
    }
  }
]);
