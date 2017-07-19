'use strict';

describe('module: main, controller: DonacionesUnoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var DonacionesUnoCtrl;
  beforeEach(inject(function ($controller) {
    DonacionesUnoCtrl = $controller('DonacionesUnoCtrl');
  }));

  it('should do something', function () {
    expect(!!DonacionesUnoCtrl).toBe(true);
  });

});
