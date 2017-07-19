'use strict';

describe('module: main, controller: BeatsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var BeatsCtrl;
  beforeEach(inject(function ($controller) {
    BeatsCtrl = $controller('BeatsCtrl');
  }));

  it('should do something', function () {
    expect(!!BeatsCtrl).toBe(true);
  });

});
