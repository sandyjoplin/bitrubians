'use strict';

describe('module: main, controller: FacturasCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var FacturasCtrl;
  beforeEach(inject(function ($controller) {
    FacturasCtrl = $controller('FacturasCtrl');
  }));

  it('should do something', function () {
    expect(!!FacturasCtrl).toBe(true);
  });

});
