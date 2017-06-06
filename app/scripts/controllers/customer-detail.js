'use strict';

/**
 * @ngdoc function
 * @name customerClientApp.controller:CustomerDetailCtrl
 * @description
 * # CustomerDetailCtrl
 * Controller of the customerClientApp
 */
angular.module('customerClientApp')
  .controller('CustomerDetailCtrl', function ($scope, customerSvc, $routeParams, $location) {
          
    $scope.customer = customerSvc.get({id: $routeParams.id});
    $scope.editCustomer = function (userId) {
            $location.path('/customer-list/'+ userId + '/customer-edit/' );
        };
  });
