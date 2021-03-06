'use strict';
angular.module('main').controller('PerfilMedicoCtrl', function ($scope) {
    $scope.tabU = true;
    $scope.tabD = false;
    $scope.tabT = false;
    $scope.tabCu = false;
    $scope.tabCi = false;
    
    $scope.tabUnofn = function () {
        $scope.tabU = true;
        $scope.tabD = false;
        $scope.tabT = false;
        $scope.tabCu = false;
        $scope.tabCi = false;
    }
    $scope.tabDosfn = function () {
        $scope.tabU = false;
        $scope.tabD = true;
        $scope.tabT = false;
        $scope.tabCu = false;
        $scope.tabCi = false;
    }
    $scope.tabTresfn = function () {
        $scope.tabU = false;
        $scope.tabD = false;
        $scope.tabT = true;
        $scope.tabCu = false;
        $scope.tabCi = false;
    }
    $scope.tabCuatrofn = function () {
        $scope.tabU = false;
        $scope.tabD = false;
        $scope.tabT = false;
        $scope.tabCu = true;
        $scope.tabCi = false;
    }
    $scope.tabCincofn = function () {
        $scope.tabU = false;
        $scope.tabD = false;
        $scope.tabT = false;
        $scope.tabCu = false;
        $scope.tabCi = true;
    }
});