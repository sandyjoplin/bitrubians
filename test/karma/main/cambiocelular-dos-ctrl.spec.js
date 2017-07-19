'use strict';

describe('module: main, controller: CambiocelularDosCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CambiocelularDosCtrl;
  beforeEach(inject(function ($controller) {
    CambiocelularDosCtrl = $controller('CambiocelularDosCtrl');
  }));

  it('should do something', function () {
    expect(!!CambiocelularDosCtrl).toBe(true);
  });

});
