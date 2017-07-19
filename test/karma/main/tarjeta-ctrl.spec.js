'use strict';

describe('module: main, controller: TarjetaCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var TarjetaCtrl;
  beforeEach(inject(function ($controller) {
    TarjetaCtrl = $controller('TarjetaCtrl');
  }));

  it('should do something', function () {
    expect(!!TarjetaCtrl).toBe(true);
  });

});
