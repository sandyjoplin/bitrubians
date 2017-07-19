'use strict';

describe('module: main, controller: InvitaCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var InvitaCtrl;
  beforeEach(inject(function ($controller) {
    InvitaCtrl = $controller('InvitaCtrl');
  }));

  it('should do something', function () {
    expect(!!InvitaCtrl).toBe(true);
  });

});
