'use strict';

angular.module('seedApp')
.controller('HomeController', ['$scope', '$state',
  function($scope, $state) 
   {
   	$scope.login = function(item) 
   	{
   		console.log(item);
   		$state.go('treasurer');
   	}	
  }
]);
