'use strict';

describe('module: main, controller: ModalesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ModalesCtrl;
  beforeEach(inject(function ($controller) {
    ModalesCtrl = $controller('ModalesCtrl');
  }));

  it('should do something', function () {
    expect(!!ModalesCtrl).toBe(true);
  });

});
