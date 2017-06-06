'use strict';

/**
 * @ngdoc function
 * @name customerClientApp.controller:CustomerListCtrl
 * @description
 * # CustomerListCtrl
 * Controller of the customerClientApp
 */
angular.module('customerClientApp')
        .controller('CustomerListCtrl', function ($scope, customerSvc, $route, $location) {
    
                   
    $scope.customerDetail = function (userId) {
            $location.path('/customer-list/'+ userId + '/customer-detail/' );
        };
    $scope.updateCustomer = function (userId) {
            $location.path('/customer-list/'+ userId + '/customer-edit/' );
        };
//    $scope.deleteCustomer = function(userId) { //Update the edited movie. Issues a PUT to /api/movies/:id
//        $scope.customer = customerSvc.get({ customerId: userId });
//        $scope.customer.$delete(function() {
//        $location.path('/customer-list');
//    });
//  };
    $scope.createCustomer = function () {
            $location.path('/customer-registry');
    };
     $scope.customers = customerSvc.query();

  });
