'use strict';

describe('module: main, controller: BitCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var BitCtrl;
  beforeEach(inject(function ($controller) {
    BitCtrl = $controller('BitCtrl');
  }));

  it('should do something', function () {
    expect(!!BitCtrl).toBe(true);
  });

});
