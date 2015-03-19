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

    $stateProvider.state('home.contact', {
      url: 'about',
      templateUrl: path + '/contact.html',
      controller: 'HomeController'
    });
    $stateProvider.state('home.ronald', {
      url: 'ronald',
      templateUrl: path + '/ronald.html',
      controller: 'HomeController'
    });

    $stateProvider.state('home.finanzas2', {
      url: 'finanzas2',
      templateUrl: path + '/finanzas2.html',
      controller: 'HomeController'
    });

    $urlRouterProvider.otherwise('/');
  }
]);
 