'use strict';

describe('module: main, controller: GrupoUnoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var GrupoUnoCtrl;
  beforeEach(inject(function ($controller) {
    GrupoUnoCtrl = $controller('GrupoUnoCtrl');
  }));

  it('should do something', function () {
    expect(!!GrupoUnoCtrl).toBe(true);
  });

});
