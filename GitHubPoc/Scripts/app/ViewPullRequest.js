var queryString = getQueryStringObject();

var number = queryString.number;

function DisplayCommits(input) {
    debugger;

    var CommitViewObject = {
        Link: input.commits_url,
        Commit: input.head.sha
    }

    var template = $("#commitTemplate").text();

    var output = Mustache.render(template, CommitViewObject);

    $(output).insertAfter("#commitTableBody");
}
debugger;
GetPullRequest(usernameStorage, repositoryStorage, number, function (result) {
    DisplayCommits(result);
})