'use strict';

var genreFilters = angular.module('genreFilters', []);

function genreFiltersController($scope, $http, $stateParams, $state, partBeforeLastSlash, fetchData) {
    var that = this;

    this.selectedgenre = $stateParams.selectedgenre;

    fetchData.getDataFromUrl('http://api.mixcloud.com/tag/' + this.selectedgenre + '/?callback=JSON_CALLBACK&metadata=1').then(function(d2) {
        that.filterpop = partBeforeLastSlash(d2.metadata.connections.popular);
        that.filternew = partBeforeLastSlash(d2.metadata.connections.new);
        that.filterhot = partBeforeLastSlash(d2.metadata.connections.hot);
        that.tagsFilters = [{
            name: that.filterpop,
            alias: "Popular"
        }, {
            name: that.filternew,
            alias: "Latest"
        }, {
            name: that.filterhot,
            alias: "Trending"
        }];
    });

    this.selectFilter = function(genre, filter) {
        fetchData.getDataFromUrl('http://api.mixcloud.com/tag/' + genre + '/' + filter + '/?callback=JSON_CALLBACK').then(function(d3) {
            that.resultsbyfilter = d3;
        });
    };

    this.goBack = function() {
        $state.go('home');
    }
}

genreFilters.controller('genreFiltersController', genreFiltersController);
