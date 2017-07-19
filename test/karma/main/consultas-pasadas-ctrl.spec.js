'use strict';

describe('module: main, controller: ConsultasPasadasCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ConsultasPasadasCtrl;
  beforeEach(inject(function ($controller) {
    ConsultasPasadasCtrl = $controller('ConsultasPasadasCtrl');
  }));

  it('should do something', function () {
    expect(!!ConsultasPasadasCtrl).toBe(true);
  });

});
