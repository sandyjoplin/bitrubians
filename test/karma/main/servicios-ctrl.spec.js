'use strict';

describe('module: main, controller: ServiciosCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ServiciosCtrl;
  beforeEach(inject(function ($controller) {
    ServiciosCtrl = $controller('ServiciosCtrl');
  }));

  it('should do something', function () {
    expect(!!ServiciosCtrl).toBe(true);
  });

});
