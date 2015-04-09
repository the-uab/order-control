'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    $stateProvider.state('home', {
      url: '/',
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
    //Tesorero -->Treasure
    $stateProvider.state('treasure', {
      url: '/',
      templateUrl: path + '/treasure.html',
      controller: 'TreasureController'
    });

    $stateProvider.state('treasure.admin_pedido',{
      url:'admin_pedido',
      templateUrl: path+'/admin_pedido.html',
      controller:'TreasureController'});

    $stateProvider.state('treasure.admin_presupuesto',{
      url:'admin_presupuesto',
      templateUrl: path+'/admin_presupuesto.html',
      controller:'TreasureController'});

    $urlRouterProvider.otherwise('/');
  }
]);
