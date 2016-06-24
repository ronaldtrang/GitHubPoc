var queryString = getQueryStringObject();

var number = queryString.number;

function DisplayCommits(input) {
    for (var i = 0; i < input.length; i++) {
        var Commit = input[i];

        var CommitViewObject = {
            Link: "",
            Commit: Commit.sha
        }

        var template = $("#commitTemplate").text();

        var output = Mustache.render(template, CommitViewObject);

        $(output).insertAfter("#commitTableBody");
    }
}

GetPullRequest(usernameStorage, repositoryStorage, number, "commits", function (result) {
    DisplayCommits(result);
})

$(document).on("click", ".commit-link", function (e) {
    $target = $(e.target);

    var commit = $target.data('commit');

    localStorage.setItem('commit', commit);
})