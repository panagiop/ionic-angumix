'use strict';

var genreList = angular.module('genreList', []);

function genreListController($scope, $http, $state, fetchData) {
    var that = this; 

    this.searchField = false;

    this.toggleSearch = function() {
        that.searchField = !that.searchField;
    }

    this.clearFilters = function() {
        that.searchgenre = '';
    };

    // fetch the categories from mixcloud API
    fetchData.getDataFromUrl('http://api.mixcloud.com/categories?callback=JSON_CALLBACK').then(function(genres){  
        that.genres = genres;
        that.genresDataPayload = genres.data; 
    }); 

    // when a category/genre is clicked, pass it as an argument to the url 
    // that fetches the data according to a specific tag
    this.selectGenre = function(genre) {
        that.searchgenre = genre;
        $state.go('filters', {
            selectedgenre: that.searchgenre
        });
        that.clearFilters();
        that.searchField = false;
    };

    // watch if searchgenre model has been changed and also check 
    // if it has the same name as category's slug name
    $scope.$watch(function() {
        return that.searchgenre;
    }, function(newVal, oldVal) {
        angular.forEach(that.genresDataPayload, function(value) {
            if (that.searchgenre === value.slug) {
                that.selectGenre(that.searchgenre);
            } else {
                return false;
            }
        });
    });
}

genreList.controller('genreListController', genreListController); 