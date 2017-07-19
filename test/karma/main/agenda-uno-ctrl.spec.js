'use strict';

describe('module: main, controller: AgendaUnoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AgendaUnoCtrl;
  beforeEach(inject(function ($controller) {
    AgendaUnoCtrl = $controller('AgendaUnoCtrl');
  }));

  it('should do something', function () {
    expect(!!AgendaUnoCtrl).toBe(true);
  });

});
