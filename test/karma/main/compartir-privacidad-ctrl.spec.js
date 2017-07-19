'use strict';

describe('module: main, controller: CompartirPrivacidadCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CompartirPrivacidadCtrl;
  beforeEach(inject(function ($controller) {
    CompartirPrivacidadCtrl = $controller('CompartirPrivacidadCtrl');
  }));

  it('should do something', function () {
    expect(!!CompartirPrivacidadCtrl).toBe(true);
  });

});
