'use strict';

angular.module('seedApp')
.controller('TreasureController', ['$scope', '$state',
  function($scope, $state) {

  	$scope.login = function(item) {
  		console.log(item);

  		$state.go('admin_pedido');
  	}	
  }
]);
