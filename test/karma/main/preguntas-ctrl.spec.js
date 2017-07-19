'use strict';

describe('module: main, controller: PreguntasCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var PreguntasCtrl;
  beforeEach(inject(function ($controller) {
    PreguntasCtrl = $controller('PreguntasCtrl');
  }));

  it('should do something', function () {
    expect(!!PreguntasCtrl).toBe(true);
  });

});
