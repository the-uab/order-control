'use strict';

angular.module('seedApp').factory('Product', ['$resource',
  function($resource) {
    return $resource('./api/productController/product', {
    }, {
       save: {
           method: 'POST'
       },
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