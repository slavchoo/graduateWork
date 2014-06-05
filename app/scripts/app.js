'use strict';

/**
 * @ngdoc overview
 * @name graduateWorkApp
 * @description
 * # graduateWorkApp
 *
 * Main module of the application.
 */
angular
    .module('graduateWorkApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'MainCtrl'
            })
            .when('/registration', {
                templateUrl: 'views/registration.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
