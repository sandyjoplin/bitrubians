'use strict';

describe('module: main, controller: NuevoDependienteCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var NuevoDependienteCtrl;
  beforeEach(inject(function ($controller) {
    NuevoDependienteCtrl = $controller('NuevoDependienteCtrl');
  }));

  it('should do something', function () {
    expect(!!NuevoDependienteCtrl).toBe(true);
  });

});
