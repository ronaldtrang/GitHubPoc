var usernameStorage = localStorage.getItem('username');
var repositoryStorage = localStorage.getItem('repository');

function GetPullRequest(username, repository, number, callback) {
    var number = number || "";

    if (number != "") {
        number = "/" + number;
    } else {
        number = "";
    }

    debugger;
    $.ajax({
        method: "GET",
        url: "https://api.github.com/repos/" + username + "/" + repository + "/pulls" + number
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