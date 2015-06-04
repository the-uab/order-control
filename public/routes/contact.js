'use strict';

angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    var path = './public/views/contact';

    $stateProvider.state('home.contact', {
      url: 'contact',
      templateUrl: path + '/contact.html',
      controller: 'ContactController'
    });

    // $stateProvider.state('home.contact.dev', {
    //   url: '/dev',
    //   templateUrl: path + '/dev.html',
    //   controller: 'ContactController'
    // });

    // $stateProvider.state('home.contact.aguti666', {
    //   url: '/aguti666',
    //   templateUrl: path + '/aguti666.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.pedidos1', {
    //   url: '/pedidos1',
    //   templateUrl: path + '/pedidos1.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.pedidos2', {
    //   url: '/pedidos2',
    //   templateUrl: path + '/pedidos2.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.Vivian', {
    //   url: '/Vivian',
    //   templateUrl: path + '/Vivian.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.detallePedido', {
    //   url: '/detallePedido',
    //   templateUrl: path + '/detallePedido.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.editarPedido', {
    //   url: '/editarPedido',
    //   templateUrl: path + '/editarPedido.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.mariouab', {
    //   url: '/mariouab',
    //   templateUrl: path + '/mariouab.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.elias', {
    //   url: '/elias',
    //   templateUrl: path + '/elias.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.finanzas2', {
    //   url: '/finanzas2',
    //   templateUrl: path + '/finanzas2.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.ronald', {
    //   url: '/ronald',
    //   templateUrl: path + '/ronald.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.person', {
    //   url: '/person',
    //   templateUrl: path + '/person.html',
    //   controller: 'PersonController'
    // });

    // $stateProvider.state('home.contact.gere', {
    //   url: '/gere',
    //   templateUrl: path + '/gere.html',
    //   controller: 'HomeController'
    // });

    // $stateProvider.state('home.contact.gereDos', {
    //   url: '/gereDos',
    //   templateUrl: path + '/gereDos.html',
    //   controller: 'HomeController'
    // });
  }
]);
