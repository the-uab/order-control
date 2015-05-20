'use strict';

angular.module('seedApp').factory('categoryProduct', ['$resource',
  function($resource) {
    return $resource('./api/categoryProductController/categoryProduct', {
    }, {
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        method: 'PUT'
      }
    });
  }
]);