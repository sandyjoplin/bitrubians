'use strict';

describe('module: main, controller: BloquearCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var BloquearCtrl;
  beforeEach(inject(function ($controller) {
    BloquearCtrl = $controller('BloquearCtrl');
  }));

  it('should do something', function () {
    expect(!!BloquearCtrl).toBe(true);
  });

});
