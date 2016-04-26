angular.module("github-client").service("GithubService", function ($http) {
    return {
        search: function (queryString) {
            return $http.get("https://api.github.com/search/repositories", {params: {q: queryString}});
        }
    };
});