'use strict';

angular.module('ballsbouncingapp').controller('MainController', ['$timeout','toastr', function($timeout,toastr){
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1462556969101;
    vm.showToastr = showToastr;


    function showToastr() {
        toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
        vm.classAnimation = '';
    }
}]);