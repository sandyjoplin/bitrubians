'use strict';

describe('module: main, controller: AgregarRfcCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AgregarRfcCtrl;
  beforeEach(inject(function ($controller) {
    AgregarRfcCtrl = $controller('AgregarRfcCtrl');
  }));

  it('should do something', function () {
    expect(!!AgregarRfcCtrl).toBe(true);
  });

});
