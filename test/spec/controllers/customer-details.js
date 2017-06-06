'use strict';

describe('Controller: CustomerDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('customerClientApp'));

  var CustomerDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerDetailsCtrl = $controller('CustomerDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomerDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
