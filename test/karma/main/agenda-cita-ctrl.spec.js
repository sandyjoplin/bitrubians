'use strict';

describe('module: main, controller: AgendaCitaCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AgendaCitaCtrl;
  beforeEach(inject(function ($controller) {
    AgendaCitaCtrl = $controller('AgendaCitaCtrl');
  }));

  it('should do something', function () {
    expect(!!AgendaCitaCtrl).toBe(true);
  });

});
