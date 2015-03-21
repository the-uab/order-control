'use strict';

angular.module('seedApp').factory('Person', ['$resource',
  function($resource) {
    return $resource('./api/demo/person', {
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
