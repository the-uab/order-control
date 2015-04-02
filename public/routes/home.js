'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    $stateProvider.state('home', {
      url: '/',
      // templateUrl: path + '/index.html',
      templateUrl: path + '/home.html',
      controller: 'MainController'
    });

    $stateProvider.state('home.session', {
      url: 'session',
      templateUrl: path + '/session.html',
      controller: 'SessionsController'
    });

    $stateProvider.state('sysadmin', {
      url: '/sysadmin',
      templateUrl: path + '/sysadmin.html',
      controller: 'SysadminController'
    });

    //     -/sysadmin/newuser
    $stateProvider.state('sysadmin.newuser', {
      url: '/newuser',
      templateUrl: path + '/newuser.html',
      controller: 'UsersController'
    });

    $stateProvider.state('home.pedidos', {
      url: 'pedidos',
      templateUrl: path + '/pedidos.html',
      controller: 'HomeController'
    });
    $stateProvider.state('home.nuevoPedido', {
      url: 'nuevoPedido',
      templateUrl: path + '/nuevoPedido.html',
      controller: 'HomeController'
    });
    $stateProvider.state('home.pedidosSolicitados', {
      url: 'pedidosSolicitados',
      templateUrl: path + '/pedidosSolicitados.html',
      controller: 'HomeController'
    });
    $urlRouterProvider.otherwise('/');
  }
]);
