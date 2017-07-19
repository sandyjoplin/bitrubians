'use strict';

describe('module: main, controller: ConocenosCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ConocenosCtrl;
  beforeEach(inject(function ($controller) {
    ConocenosCtrl = $controller('ConocenosCtrl');
  }));

  it('should do something', function () {
    expect(!!ConocenosCtrl).toBe(true);
  });

});
