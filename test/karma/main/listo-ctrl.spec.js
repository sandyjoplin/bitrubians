'use strict';

describe('module: main, controller: ListoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ListoCtrl;
  beforeEach(inject(function ($controller) {
    ListoCtrl = $controller('ListoCtrl');
  }));

  it('should do something', function () {
    expect(!!ListoCtrl).toBe(true);
  });

});
