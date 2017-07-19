'use strict';

describe('module: main, controller: AlertaDosCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AlertaDosCtrl;
  beforeEach(inject(function ($controller) {
    AlertaDosCtrl = $controller('AlertaDosCtrl');
  }));

  it('should do something', function () {
    expect(!!AlertaDosCtrl).toBe(true);
  });

});
