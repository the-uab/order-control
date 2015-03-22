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
      templateUrl: path + '/about.vidal',
      controller: 'HomeController'
    });

    $urlRouterProvider.otherwise('/');
  }
]);
