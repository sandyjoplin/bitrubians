'use strict';

describe('module: main, controller: ConsultasCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ConsultasCtrl;
  beforeEach(inject(function ($controller) {
    ConsultasCtrl = $controller('ConsultasCtrl');
  }));

  it('should do something', function () {
    expect(!!ConsultasCtrl).toBe(true);
  });

});
