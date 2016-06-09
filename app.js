(function() {
    var app = angular.module('app', []);
    app.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('courses.json').then(function(res){
            $scope.courses = res.data;
        });
        $http.get('README.md').then(function(res){
            $scope.readme = res.data;
        });
    }]);

    app.filter('markdown', function() {
      return function(text) {
        return markdown.toHTML(text);
      }
    });

    app.filter('unsafe', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    });
})()
