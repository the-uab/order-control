'use strict';

angular.module('seedApp')
.controller('UsersController', ['$scope',
  function($scope) {

  	$scope.users = [
	  	{ name: 'user11', age: 20},
	  	{ name: 'user2', age: 22},
	  	{ name: 'user3', age: 23},
	  	{ name: 'user4', age: 24},
	  	{ name: 'user5', age: 25},
	  	{ name: 'user6', age: 26},
  	];

  	var count = 30;

  	$scope.remove = function(user) {
  	  console.log(user);
  	}

  	$scope.createNewUser = function() {
  		var user = {
  			name: 'default',
  			age: count++
  		}
  		$scope.users.push(user);
  	}
  }
]);
