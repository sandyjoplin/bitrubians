'use strict';

describe('module: main, controller: MiembrosGruposCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MiembrosGruposCtrl;
  beforeEach(inject(function ($controller) {
    MiembrosGruposCtrl = $controller('MiembrosGruposCtrl');
  }));

  it('should do something', function () {
    expect(!!MiembrosGruposCtrl).toBe(true);
  });

});
