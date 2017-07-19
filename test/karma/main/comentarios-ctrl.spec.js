'use strict';

describe('module: main, controller: ComentariosCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ComentariosCtrl;
  beforeEach(inject(function ($controller) {
    ComentariosCtrl = $controller('ComentariosCtrl');
  }));

  it('should do something', function () {
    expect(!!ComentariosCtrl).toBe(true);
  });

});
