'use strict';

describe('module: main, controller: AmigoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AmigoCtrl;
  beforeEach(inject(function ($controller) {
    AmigoCtrl = $controller('AmigoCtrl');
  }));

  it('should do something', function () {
    expect(!!AmigoCtrl).toBe(true);
  });

});
