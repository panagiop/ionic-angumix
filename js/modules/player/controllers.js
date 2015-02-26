'use strict';

var cloudcast = angular.module('cloudcast', []);

function cloudcastController($scope, $http, $state, $stateParams, $sce, fetchData) {
	var that = this;

	fetchData.getDataFromUrl('http://api.mixcloud.com/' + $stateParams.username + '/' + $stateParams.slug + '/?callback=JSON_CALLBACK').then(function(d4) {
		that.cloudcast = d4;
	});

	//apply sce (strict contextual escaping) to the url
	this.trustSrc = function() {
		var embededPlayerUrl = 'http://www.mixcloud.com/widget/iframe/?feed=http%3A%2F%2Fwww.mixcloud.com%2F' + $stateParams.username + '%2F' + $stateParams.slug + '%2F;replace=0&amp;hide_cover=&amp;light=&amp;hide_artwork=&amp;stylecolor=&amp;embed_type=widget_standard&amp;hide_tracklist=0';
		return $sce.trustAsResourceUrl(embededPlayerUrl);
	};

	this.goBack = function() {
		$state.go('filters', {
			selectedgenre: $stateParams.genre
		});
	}
}

cloudcast.controller('cloudcastController', cloudcastController);
