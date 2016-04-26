angular.module("github-client").controller("SearchController", function (GithubService) {

    var vm = this;

    this.doSearch = function() {
        GithubService
            .search(vm.search)
            .then(function (response) {
                vm.searchResults = response.data;
            });
    };

    this.search = "bootstrap";
    this.doSearch();
});
