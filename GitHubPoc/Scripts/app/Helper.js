var usernameStorage = localStorage.getItem('username');
var repositoryStorage = localStorage.getItem('repository');
var numberStorage = localStorage.getItem('number');
var commitStorage = localStorage.getItem('commit');

function formatRoute(input) {
    if (input != "") {
        return "/" + input;
    } else {
        return "";
    }
}

function GetPullRequest(username, repository, number, commit, callback) {
    var number = number || "";
    var commit = commit || "";

    number = formatRoute(number);
    commit = formatRoute(commit);

    $.ajax({
        method: "GET",
        url: "https://api.github.com/repos/" + username + "/" + repository + "/pulls" + number + commit
    })
    .done(function (result) {
        callback.call(this, result);
    })
    .fail(function (error) {
        alert("Repository cannot be found!");
    })
}

function getQueryStringObject(input) {

    input = input || (location.href.split("?")[1] || "");

    var i = 0; queryArray = input.split("&");

    var queryObject = {};

    for (i = 0; i < queryArray.length; i++) {
        var queryPairString = queryArray[i];

        var queryPair = queryPairString.split("=");

        var queryKey = queryPair[0];

        var queryValue = queryPair[1];

        queryObject[queryKey] = queryValue;
    }

    return queryObject;
}