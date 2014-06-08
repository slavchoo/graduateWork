'use strict';

angular.module('yoggyApp')
    .controller('AppCtrl', function ($rootScope, $location, $window) {
        $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
            $location.path('/login');
        });

        this.back = function() {
            $window.history.back();
        };

        $rootScope.goTo = function(url) {
            $location.path(url);
        }
        $rootScope.goToUrl = function(url) {
            $location.url(url);
        }
    });
