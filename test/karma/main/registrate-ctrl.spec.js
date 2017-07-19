'use strict';

describe('module: main, controller: RegistrateCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var RegistrateCtrl;
  beforeEach(inject(function ($controller) {
    RegistrateCtrl = $controller('RegistrateCtrl');
  }));

  it('should do something', function () {
    expect(!!RegistrateCtrl).toBe(true);
  });

});
