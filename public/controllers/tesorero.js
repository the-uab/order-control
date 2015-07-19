'use strict';

angular.module('seedApp')
.controller('tesoreroController', ['$scope', '$state',
  function($scope, $state) {
  	$scope.cerrarSession = function() {
  		$state.go('home')
  	}
  }
]);
