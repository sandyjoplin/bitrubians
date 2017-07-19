'use strict';

describe('module: main, controller: PerfilMedicoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var PerfilMedicoCtrl;
  beforeEach(inject(function ($controller) {
    PerfilMedicoCtrl = $controller('PerfilMedicoCtrl');
  }));

  it('should do something', function () {
    expect(!!PerfilMedicoCtrl).toBe(true);
  });

});
