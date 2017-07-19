'use strict';

describe('module: main, controller: RecetaCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var RecetaCtrl;
  beforeEach(inject(function ($controller) {
    RecetaCtrl = $controller('RecetaCtrl');
  }));

  it('should do something', function () {
    expect(!!RecetaCtrl).toBe(true);
  });

});
