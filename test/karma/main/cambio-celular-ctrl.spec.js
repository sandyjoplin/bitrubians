'use strict';

describe('module: main, controller: CambioCelularCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CambioCelularCtrl;
  beforeEach(inject(function ($controller) {
    CambioCelularCtrl = $controller('CambioCelularCtrl');
  }));

  it('should do something', function () {
    expect(!!CambioCelularCtrl).toBe(true);
  });

});
