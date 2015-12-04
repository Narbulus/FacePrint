'use strict';

angular.module('facePrintApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'services',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider

      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
