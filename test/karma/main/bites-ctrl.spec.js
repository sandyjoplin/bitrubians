'use strict';

describe('module: main, controller: BitesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var BitesCtrl;
  beforeEach(inject(function ($controller) {
    BitesCtrl = $controller('BitesCtrl');
  }));

  it('should do something', function () {
    expect(!!BitesCtrl).toBe(true);
  });

});
