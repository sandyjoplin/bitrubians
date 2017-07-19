'use strict';

describe('module: main, controller: NuevoGrupoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var NuevoGrupoCtrl;
  beforeEach(inject(function ($controller) {
    NuevoGrupoCtrl = $controller('NuevoGrupoCtrl');
  }));

  it('should do something', function () {
    expect(!!NuevoGrupoCtrl).toBe(true);
  });

});
