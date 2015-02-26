(function() {
    'use strict';

    angular.module('genreFiltersList.states', ['genreFilters']);

    angular.module('genreFiltersList.states')
    .config(function($stateProvider) { 
        $stateProvider.state('filters', { 
            url: 'filters/:selectedgenre',
            templateUrl: 'templates/genre-filters.html',
            controller: 'genreFiltersController as vm'
        })
    });
})();