'use strict';

describe('module: main, controller: AyudaCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AyudaCtrl;
  beforeEach(inject(function ($controller) {
    AyudaCtrl = $controller('AyudaCtrl');
  }));

  it('should do something', function () {
    expect(!!AyudaCtrl).toBe(true);
  });

});
