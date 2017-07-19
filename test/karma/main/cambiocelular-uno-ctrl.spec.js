'use strict';

describe('module: main, controller: CambiocelularUnoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CambiocelularUnoCtrl;
  beforeEach(inject(function ($controller) {
    CambiocelularUnoCtrl = $controller('CambiocelularUnoCtrl');
  }));

  it('should do something', function () {
    expect(!!CambiocelularUnoCtrl).toBe(true);
  });

});
