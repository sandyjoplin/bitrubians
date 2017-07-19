'use strict';

describe('module: main, controller: RecomendarCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var RecomendarCtrl;
  beforeEach(inject(function ($controller) {
    RecomendarCtrl = $controller('RecomendarCtrl');
  }));

  it('should do something', function () {
    expect(!!RecomendarCtrl).toBe(true);
  });

});
