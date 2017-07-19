'use strict';

describe('module: main, controller: AlertaCuatroCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AlertaCuatroCtrl;
  beforeEach(inject(function ($controller) {
    AlertaCuatroCtrl = $controller('AlertaCuatroCtrl');
  }));

  it('should do something', function () {
    expect(!!AlertaCuatroCtrl).toBe(true);
  });

});
