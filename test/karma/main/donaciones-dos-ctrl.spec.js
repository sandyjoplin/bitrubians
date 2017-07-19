'use strict';

describe('module: main, controller: DonacionesDosCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var DonacionesDosCtrl;
  beforeEach(inject(function ($controller) {
    DonacionesDosCtrl = $controller('DonacionesDosCtrl');
  }));

  it('should do something', function () {
    expect(!!DonacionesDosCtrl).toBe(true);
  });

});
