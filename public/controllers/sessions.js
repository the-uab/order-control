'use strict';

angular.module('seedApp')
.controller('SessionsController', ['$scope', '$state',
  function($scope, $state) {
  	$scope.login = function(item) {
  		console.log(item);
  		$state.go('sysadmin');
  	}	
  }
]);
