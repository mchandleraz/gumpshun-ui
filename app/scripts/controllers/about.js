'use strict';

/**
 * @ngdoc function
 * @name gumptionFrontEndApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gumptionFrontEndApp
 */
angular.module('gumptionFrontEndApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
