function GetCommit(username, repository, commit, callback) {
    $.ajax({
        method: "GET",
        url: "https://api.github.com/repos/" + username + "/" + repository + "/commits/" + commit
    })
    .done(function (result) {
        callback.call(this, result);
    })
    .fail(function (error) {
        alert("Commit cannot be found!");
    })
}

GetCommit(usernameStorage, repositoryStorage, commitStorage, function (result) {

    var commitObject = result;
    var commitFileName = commitObject.files[0].filename;
    var commitRawUrl = "https://raw.githubusercontent.com/" + usernameStorage + "/" + repositoryStorage + "/" + commitStorage + "/" + commitFileName;

    $.get(commitRawUrl, function (commit) {
        $("#commit").html(commit);
    })
})