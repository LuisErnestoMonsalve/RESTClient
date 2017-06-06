'use strict';

/**
 * @ngdoc function
 * @name customerClientApp.controller:CustomerEditCtrl
 * @description
 * # CustomerEditCtrl
 * Controller of the customerClientApp
 */
angular.module('customerClientApp')
  .controller('CustomerEditCtrl', function ($scope,customerSvc, $routeParams,$location) {
     $scope.loadCustomer = function() { 
     $scope.customer = customerSvc.get({ customerId: $routeParams.id });
  };
  $scope.loadCustomer();
  $scope.updateCustomer = function() { 
    $scope.customer.$update(function() {
      $location.path('/customer-list');
    });
  };
  });
