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

    $stateProvider.state('home.contact.dev', {
      url: '/dev',
      templateUrl: path + '/dev.html',
      controller: 'ContactController'
    });
  }
]);
