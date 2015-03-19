'use strict';

angular.module('seedApp')
.controller('ContactController', ['$scope',
  function($scope) {
    var developersList = [
	    {
	        name: 'Dev',
	        url: 'home.contact.dev'
	    },
		{
			name:'aguti666',
			url: 'home.contact.aguti666'
		},
		{
			name:'pedidos1',
			url: 'home.contact.pedidos1'
		},
		{
			name:'pedidos2',
			url: 'home.contact.pedidos2'
		},
		{
			name:'Vivian',
			url: 'home.contact.Vivian'
		},
		{
			name:'detallePedido',
			url: 'home.contact.detallePedido'
		},
		{
			name:'editarPedido',
			url: 'home.contact.editarPedido'
		},
		{
			name:'mariouab',
			url: 'home.contact.mariouab'
		},
		{
			name:'elias',
			url: 'home.contact.elias'
		},
		{
			name:'finanzas2',
			url: 'home.contact.finanzas2'
		},
		{
			name:'ronald',
			url: 'home.contact.ronald'
		}
    ];

    $scope.developers = developersList;
  }
]);
