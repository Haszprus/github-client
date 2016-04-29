angular.module("GithubClient", ['ngRoute']);


angular.module('GithubClient').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'routes/search/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
    /* }).when('/about', {
        templateUrl: 'routes/about.html'
    */}).otherwise('/');
}]);
