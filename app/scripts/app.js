'use strict';

/**
 * @ngdoc overview
 * @name customerClientApp
 * @description
 * # customerClientApp
 *
 * Main module of the application.
 */
angular
  .module('customerClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'customerServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/customer-list', {
        templateUrl: 'views/customer-list.html',
        controller: 'CustomerListCtrl',
        controllerAs: 'customerList'
      })
      .when('/customer-list/:id/customer-detail', {
        templateUrl: 'views/customer-detail.html',
        controller: 'CustomerDetailCtrl',
        controllerAs: 'customerDetail'
      })
      .when('/customer-registry', {
        templateUrl: 'views/customer-registry.html',
        controller: 'CustomerRegistryCtrl',
        controllerAs: 'customerRegistry'
      })
      .when('/customer-list/:id/customer-edit', {
        templateUrl: 'views/customer-edit.html',
        controller: 'CustomerEditCtrl',
        controllerAs: 'customerEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
