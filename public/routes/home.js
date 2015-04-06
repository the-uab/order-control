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

    // nueva pestaña
    $urlRouterProvider.otherwise('/');
  }
]);
