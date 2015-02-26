(function() {
    'use strict';

    angular.module('genresList.states', ['genreList']);

    angular.module('genresList.states')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'genreListController as vm'
        })
    });
})();
