'use strict';

angular.module('seedApp')
.controller('SessionsController', ['$scope', '$state',
  function($scope, $state) {
  	$scope.login = function(item) {
  		console.log(item);
<<<<<<< HEAD
  		$state.go('sysadmin');
=======
  		if (item.email == "sysadmin") {

	  		$state.go('sysadmin');	
  		} else {
  			$state.go('treasure');
  		}
>>>>>>> 33b839b0c5684a5a2be0eaf84a37ae86004c78a7
  	}	
  }
]);

