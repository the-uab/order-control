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
// tesorero
    $stateProvider.state('home.treasurer', {
      url: 'treasurer',
      templateUrl: path + '/treasurer.html',
      controller: 'MainController'
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
      controller:'TreasureController'
    });

     $stateProvider.state('juan', {
      url: '/juan',
      templateUrl: path + '/juan.html',
      controller: 'juan'
    });

    $stateProvider.state('treasure.admin_presupuesto',{
      url:'admin_presupuesto',
      templateUrl: path+'/admin_presupuesto.html',
      controller:'TreasureController'});

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
    $stateProvider.state('home.producto', {
      url: 'product',
      templateUrl: path + '/producto.html',
      controller: 'productController'
    });
    $stateProvider.state('home.category_product', {
      url: 'categoryProduct',
      templateUrl: path + '/category_product.html',
      controller: 'categoryProductController'
    });

  $stateProvider.state('home.vidal', {
      url: 'vidal',
      templateUrl: path + '/vidal.html',
      controller: 'HomeController'
    });

   $stateProvider.state('home.vidal2', {
      url: 'vidal2',
      templateUrl: path + '/vidal2.html',
      controller: 'HomeController'
    });

    $urlRouterProvider.otherwise('/');
  }
]);
