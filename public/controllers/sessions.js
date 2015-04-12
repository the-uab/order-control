'use strict';

angular.module('seedApp')
.controller('SessionsController', ['$scope', '$state',
  function($scope, $state) {
  	$scope.login = function(item) {
  		console.log(item);

  		if (item.email == "sysadmin") {

	  		$state.go('treasure');	
  		} else {
  			$state.go('treasure');
  		}

  	}	
  }
]);

