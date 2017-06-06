'use strict';

/**
 * @ngdoc service
 * @name customerClientApp.customerSvc
 * @description
 * # customerSvc
 * Factory in the customerClientApp.
 */
angular.module('customerServices', ['ngResource'])
  .factory('customerSvc',  ['$resource' ,
      function ($resource) {
          return $resource(
                  'http://localhost:8080/customer/webresources/com.udea.customer.entity.customer/:customerId:id',
          
          {},
          { update: {method: 'DELETE', params:{id:'@customerId'}}});
  }]);
