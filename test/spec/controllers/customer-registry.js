'use strict';

describe('Controller: CustomerRegistryCtrl', function () {

  // load the controller's module
  beforeEach(module('customerClientApp'));

  var CustomerRegistryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerRegistryCtrl = $controller('CustomerRegistryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomerRegistryCtrl.awesomeThings.length).toBe(3);
  });
});
