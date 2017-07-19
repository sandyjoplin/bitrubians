'use strict';

describe('module: main, controller: HistoricoRecetasCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var HistoricoRecetasCtrl;
  beforeEach(inject(function ($controller) {
    HistoricoRecetasCtrl = $controller('HistoricoRecetasCtrl');
  }));

  it('should do something', function () {
    expect(!!HistoricoRecetasCtrl).toBe(true);
  });

});
