'use strict';
angular.module('ballsbouncingapp').config(function ($stateProvider) {
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        page: {
            title: 'About',
            description: ''
        }
    });
});
