'use strict';

describe('module: main, controller: AgendaCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AgendaCtrl;
  beforeEach(inject(function ($controller) {
    AgendaCtrl = $controller('AgendaCtrl');
  }));

  it('should do something', function () {
    expect(!!AgendaCtrl).toBe(true);
  });

});
