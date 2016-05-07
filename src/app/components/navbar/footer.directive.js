'use strict';

angular.module('ballsbouncingapp').directive('bbaFooter', function(){
    return {
        restrict: 'E',
        templateUrl: 'app/components/navbar/footer.html',
        controller: 'FooterController',
        bindToController: true
    };
});

angular.module('ballsbouncingapp').controller('FooterController', ['$scope', function($scope){

}]);