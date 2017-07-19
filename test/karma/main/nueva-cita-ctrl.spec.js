'use strict';

describe('module: main, controller: NuevaCitaCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var NuevaCitaCtrl;
  beforeEach(inject(function ($controller) {
    NuevaCitaCtrl = $controller('NuevaCitaCtrl');
  }));

  it('should do something', function () {
    expect(!!NuevaCitaCtrl).toBe(true);
  });

});
