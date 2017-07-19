'use strict';

describe('module: main, controller: LlenarPerfilCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var LlenarPerfilCtrl;
  beforeEach(inject(function ($controller) {
    LlenarPerfilCtrl = $controller('LlenarPerfilCtrl');
  }));

  it('should do something', function () {
    expect(!!LlenarPerfilCtrl).toBe(true);
  });

});
