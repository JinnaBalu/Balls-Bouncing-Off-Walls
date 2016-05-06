'use strict';
angular.module('ballsbouncingapp').config(function ($stateProvider) {
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        page: {
            title: 'Contact',
            description: ''
        }
    });
});
