'use strict';

angular.module('ballsbouncingapp').directive('bbaNavbar', function(){
    return {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        controller: 'NavbarController',
        bindToController: true
    };
});

angular.module('ballsbouncingapp').controller('NavbarController', ['$scope', function($scope){

}]);