'use strict';

describe('module: main, controller: NotificacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var NotificacionesCtrl;
  beforeEach(inject(function ($controller) {
    NotificacionesCtrl = $controller('NotificacionesCtrl');
  }));

  it('should do something', function () {
    expect(!!NotificacionesCtrl).toBe(true);
  });

});
