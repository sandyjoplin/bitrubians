'use strict';

describe('module: main, controller: DonacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var DonacionesCtrl;
  beforeEach(inject(function ($controller) {
    DonacionesCtrl = $controller('DonacionesCtrl');
  }));

  it('should do something', function () {
    expect(!!DonacionesCtrl).toBe(true);
  });

});
