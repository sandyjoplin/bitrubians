'use strict';

describe('module: main, controller: AlertaCincoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AlertaCincoCtrl;
  beforeEach(inject(function ($controller) {
    AlertaCincoCtrl = $controller('AlertaCincoCtrl');
  }));

  it('should do something', function () {
    expect(!!AlertaCincoCtrl).toBe(true);
  });

});
