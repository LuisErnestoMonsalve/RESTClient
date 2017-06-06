'use strict';

describe('Controller: CustomerEditCtrl', function () {

  // load the controller's module
  beforeEach(module('customerClientApp'));

  var CustomerEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerEditCtrl = $controller('CustomerEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomerEditCtrl.awesomeThings.length).toBe(3);
  });
});
