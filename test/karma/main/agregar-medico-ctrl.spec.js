'use strict';

describe('module: main, controller: AgregarMedicoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AgregarMedicoCtrl;
  beforeEach(inject(function ($controller) {
    AgregarMedicoCtrl = $controller('AgregarMedicoCtrl');
  }));

  it('should do something', function () {
    expect(!!AgregarMedicoCtrl).toBe(true);
  });

});
