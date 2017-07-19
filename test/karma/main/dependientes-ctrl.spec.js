'use strict';

describe('module: main, controller: DependientesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var DependientesCtrl;
  beforeEach(inject(function ($controller) {
    DependientesCtrl = $controller('DependientesCtrl');
  }));

  it('should do something', function () {
    expect(!!DependientesCtrl).toBe(true);
  });

});
