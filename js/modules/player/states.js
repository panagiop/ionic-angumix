(function() {
    'use strict';

    angular.module('cloudcast.states', ['cloudcast']);

    angular.module('cloudcast.states')
        .config(function($stateProvider) {
            $stateProvider.state('cloudcast', {
                url: ':genre/:username/:slug',
                templateUrl: 'templates/cloudcast.html',
                controller: 'cloudcastController as vm'
            })
        });
})();
