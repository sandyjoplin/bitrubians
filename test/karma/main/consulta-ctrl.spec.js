'use strict';

describe('module: main, controller: ConsultaCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ConsultaCtrl;
  beforeEach(inject(function ($controller) {
    ConsultaCtrl = $controller('ConsultaCtrl');
  }));

  it('should do something', function () {
    expect(!!ConsultaCtrl).toBe(true);
  });

});
