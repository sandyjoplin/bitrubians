'use strict';

describe('module: main, controller: CompartirCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CompartirCtrl;
  beforeEach(inject(function ($controller) {
    CompartirCtrl = $controller('CompartirCtrl');
  }));

  it('should do something', function () {
    expect(!!CompartirCtrl).toBe(true);
  });

});
