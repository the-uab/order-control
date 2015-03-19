'use strict';

angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    var path = './public/views';
    $stateProvider.state('home', {
      url: '/',
      templateUrl: path + '/index.html',
      controller: 'MainController'
    });

    $stateProvider.state('home.about', {
      url: 'about',
      templateUrl: path + '/about.html',
      controller: 'HomeController'
    });


    $stateProvider.state('home.aguti666', {
      url: 'aguti666',
      templateUrl: path + '/aguti666.html',
      controller: 'HomeController'
    });

    $stateProvider.state('home.pedidos1', {
      url: 'pedidos1',
      templateUrl: path + '/pedidos1.html',
      controller: 'HomeController'
    });

    $stateProvider.state('home.pedidos2', {
      url: 'pedidos2',
      templateUrl: path + '/pedidos2.html',
      controller: 'HomeController'
    });

    $urlRouterProvider.otherwise('/');
  }
]);
