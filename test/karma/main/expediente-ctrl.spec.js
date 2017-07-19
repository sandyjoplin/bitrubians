'use strict';

describe('module: main, controller: ExpedienteCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ExpedienteCtrl;
  beforeEach(inject(function ($controller) {
    ExpedienteCtrl = $controller('ExpedienteCtrl');
  }));

  it('should do something', function () {
    expect(!!ExpedienteCtrl).toBe(true);
  });

});
