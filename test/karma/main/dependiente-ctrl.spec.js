'use strict';

describe('module: main, controller: DependienteCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var DependienteCtrl;
  beforeEach(inject(function ($controller) {
    DependienteCtrl = $controller('DependienteCtrl');
  }));

  it('should do something', function () {
    expect(!!DependienteCtrl).toBe(true);
  });

});
