'use strict';

describe('module: main, controller: AlertaTresCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AlertaTresCtrl;
  beforeEach(inject(function ($controller) {
    AlertaTresCtrl = $controller('AlertaTresCtrl');
  }));

  it('should do something', function () {
    expect(!!AlertaTresCtrl).toBe(true);
  });

});
