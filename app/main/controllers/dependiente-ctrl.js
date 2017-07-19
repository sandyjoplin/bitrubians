'use strict';
angular.module('main').controller('DependienteCtrl', function ($scope) {
    $scope.tabUno = true;
    $scope.tabdos = false;
    $scope.cambiarTabUno = function () {
        $scope.tabUno = !$scope.tabUno;
        $scope.tabdos = !$scope.tabdos;
    }
});