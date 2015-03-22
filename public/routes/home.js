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
