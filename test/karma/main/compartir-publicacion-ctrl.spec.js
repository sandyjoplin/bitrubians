'use strict';

describe('module: main, controller: CompartirPublicacionCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CompartirPublicacionCtrl;
  beforeEach(inject(function ($controller) {
    CompartirPublicacionCtrl = $controller('CompartirPublicacionCtrl');
  }));

  it('should do something', function () {
    expect(!!CompartirPublicacionCtrl).toBe(true);
  });

});
