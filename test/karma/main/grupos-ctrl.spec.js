'use strict';

describe('module: main, controller: GruposCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var GruposCtrl;
  beforeEach(inject(function ($controller) {
    GruposCtrl = $controller('GruposCtrl');
  }));

  it('should do something', function () {
    expect(!!GruposCtrl).toBe(true);
  });

});
