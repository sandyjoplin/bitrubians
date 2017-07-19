'use strict';

describe('module: main, controller: TuComunidadCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var TuComunidadCtrl;
  beforeEach(inject(function ($controller) {
    TuComunidadCtrl = $controller('TuComunidadCtrl');
  }));

  it('should do something', function () {
    expect(!!TuComunidadCtrl).toBe(true);
  });

});
