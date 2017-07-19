'use strict';

describe('module: main, controller: ChatGrupoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ChatGrupoCtrl;
  beforeEach(inject(function ($controller) {
    ChatGrupoCtrl = $controller('ChatGrupoCtrl');
  }));

  it('should do something', function () {
    expect(!!ChatGrupoCtrl).toBe(true);
  });

});
