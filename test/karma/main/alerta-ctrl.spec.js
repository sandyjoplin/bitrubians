'use strict';

describe('module: main, controller: AlertaCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AlertaCtrl;
  beforeEach(inject(function ($controller) {
    AlertaCtrl = $controller('AlertaCtrl');
  }));

  it('should do something', function () {
    expect(!!AlertaCtrl).toBe(true);
  });

});
