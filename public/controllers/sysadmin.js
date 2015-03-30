'use strict';

angular.module('seedApp')
.controller('SysadminController', ['$scope', '$state',
  function($scope, $state) {
  	$scope.cerrarSession = function() {
  		$state.go('home')
  	}
  }
]);
