angular.module('partBeforeLastSlash', [])
    .factory('partBeforeLastSlash', function() {
        return function(str) {
            var parts = str.split("/");
            var result = parts[parts.length - 2];
            return result;
        };
    });

angular.module('fetchData', [])
    .factory('fetchData', function($http, $q) {
        return {
            getDataFromUrl: function(url) {
                var deferred = $q.defer();
                $http.jsonp(url)
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(function() {
                        deferred.reject();
                    });
                return deferred.promise;
            }
        }
    });
