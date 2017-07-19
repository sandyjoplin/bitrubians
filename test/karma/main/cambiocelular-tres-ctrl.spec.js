'use strict';

describe('module: main, controller: CambiocelularTresCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CambiocelularTresCtrl;
  beforeEach(inject(function ($controller) {
    CambiocelularTresCtrl = $controller('CambiocelularTresCtrl');
  }));

  it('should do something', function () {
    expect(!!CambiocelularTresCtrl).toBe(true);
  });

});
