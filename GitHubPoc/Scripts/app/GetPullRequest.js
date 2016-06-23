function DisplayPullRequest(input) {

    for (var i = 0; i < input.length; i++) {
        var Request = input[i];

        var PullRequestObject = {
            Number: Request.number,
            Title: Request.title,
            User: Request.user.login,
            Date: Request.created_at,
            Repository: $("#txtRepository").val()
        }

        var template = $("#pullRequestTemplate").text();

        var output = Mustache.render(template, PullRequestObject);

        $(output).insertAfter("#pullRequestTableBody");
    }
}

$(document).on("click", "#btnRepository", function () {
    var repository = $("#txtRepository").val();
    localStorage.setItem('repository', repository);
    GetPullRequest(usernameStorage, repository, "", function (result) {
        DisplayPullRequest(result);
    });
})