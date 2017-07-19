'use strict';

describe('module: main, controller: EmocionalCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var EmocionalCtrl;
  beforeEach(inject(function ($controller) {
    EmocionalCtrl = $controller('EmocionalCtrl');
  }));

  it('should do something', function () {
    expect(!!EmocionalCtrl).toBe(true);
  });

});
