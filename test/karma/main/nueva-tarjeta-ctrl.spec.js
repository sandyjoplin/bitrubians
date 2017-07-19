'use strict';

describe('module: main, controller: NuevaTarjetaCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var NuevaTarjetaCtrl;
  beforeEach(inject(function ($controller) {
    NuevaTarjetaCtrl = $controller('NuevaTarjetaCtrl');
  }));

  it('should do something', function () {
    expect(!!NuevaTarjetaCtrl).toBe(true);
  });

});
