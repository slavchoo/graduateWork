'use strict';

/**
 * @ngdoc function
 * @name graduateWorkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the graduateWorkApp
 */
angular.module('graduateWorkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
