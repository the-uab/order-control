'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    // PUBLIC
    $stateProvider.state('main', {
      url: '/',
      templateUrl: path + '/index.html',
      controller: 'MainController'
    });

    $stateProvider.state('main.session', {
      url: 'session',
      templateUrl: path + '/session.html',
      controller: 'SessionsController'
    });

    // SYSADMIN
    $stateProvider.state('sysadmin', {
      url: '/sysadmin',
      templateUrl: path + '/sysadmin/index.html',
      controller: 'SysadminController'
    });

    $stateProvider.state('sysadmin.pedidos', {
      url: '/users',
      templateUrl: path + '/sysadmin/paginas/pedidos.html',
      controller: 'SysadminController'
    });

    $stateProvider.state('sysadmin.session', {
      url: '/users',
      templateUrl: path + '/sysadmin/paginas/session.html',
      controller: 'SysadminController'
    });

    $stateProvider.state('sysadmin.users', {
      url: '/users',
      templateUrl: path + '/sysadmin/paginas/users.html',
      controller: 'SysadminUsersController'
    });

    // ALMACEN
    $stateProvider.state('almacen', {
      url: '/almacen',
      templateUrl: path + '/almacen/index.html',
      controller: 'AlmacenController'
    });

    $stateProvider.state('almacen.pedido', {
      url: '/pedido',
      templateUrl: path + '/almacen/paginas/pedidos.html',
      controller: 'PedidosController'
    });

    $stateProvider.state('almacen.productos', {
      url: '/productos',
      templateUrl: path + '/almacen/paginas/productos.html',
      controller: 'productController'
    }); 

    $stateProvider.state('almacen.nuevoproducto', {
      url: '/nuevo_producto',
      templateUrl: path + '/almacen/productos/nuevo.html',
      controller: 'productController'
    });
    $stateProvider.state('almacen.categoriaProducto', {
      url: '/categoriaProducto',
      templateUrl: path + '/almacen/productos/categoriaProducto.html',
      controller: 'categoryProductController'
    });
    $stateProvider.state('almacen.editCategoria', {
      url: '/editCategoria/:idCategoria',
      templateUrl: path + '/almacen/productos/editCategoria.html',
      controller: 'categoryProductController'
    });

    // ADMINISTRADOR
    $stateProvider.state('administrador', {
      url: '/administrador',
      templateUrl: path + '/administrador/index.html',
      controller: 'AdministradorController'
    });
    $stateProvider.state('administrador.pedido', {
      url: '/pedido',
      templateUrl: path + '/administrador/paginas/pedidos.html',
      controller: 'PedidosController'
    });

    $stateProvider.state('administrador.autorizacion', {
      url: '/productos',
      templateUrl: path + '/administrador/paginas/productos.html',
      controller: 'ProductosController'
    });

    $stateProvider.state('administrador.administrarpedido', {
      url: '/administrarpedido',
      templateUrl: path + '/administrador/paginas/administrarpedido.html',
      controller: 'ProductosController'
    });

    // AUTH
    $stateProvider.state('auth', {
      url: '/auth',
      templateUrl: path + '/auth/index.html',
      controller: 'AuthenticationController'
    });

    $stateProvider.state('auth.pedido', {
      url: '/pedido',
      templateUrl: path + '/auth/paginas/pedidos.html',
      controller: 'PedidosController'
    });

    $stateProvider.state('auth.productos', {
      url: '/productos',
      templateUrl: path + '/auth/paginas/productos.html',
      controller: 'ProductosController'
    });

    $stateProvider.state('tesorero', {
      url: '/tesorero',
      templateUrl: path + '/tesorero/index.html',
      controller: 'TesoreroController'
    });

    $stateProvider.state('tesorero.admin_pedido', {
      url: '/admin_pedido',
      templateUrl: path + '/tesorero/paginas/admin_pedido.html',
      controller: 'TesoreroController'
    });

    $stateProvider.state('tesorero.admin_presupuesto', {
      url: '/admin_presupuesto',
      templateUrl: path + '/tesorero/paginas/admin_presupuesto.html',
      controller: 'TesoreroController'
    });

    $urlRouterProvider.otherwise('/');
  }
]);
