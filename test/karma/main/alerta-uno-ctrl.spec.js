'use strict';

describe('module: main, controller: AlertaUnoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AlertaUnoCtrl;
  beforeEach(inject(function ($controller) {
    AlertaUnoCtrl = $controller('AlertaUnoCtrl');
  }));

  it('should do something', function () {
    expect(!!AlertaUnoCtrl).toBe(true);
  });

});
