function AuthenticateUser(username, password, callback) {
    $.ajax({
        method: "GET",
        url: "https://api.github.com/user",
        dataType: 'json',
        async: false,
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
    })
    .done(function (result) {
        callback.call(this, result);
    })
    .fail(function (error) {
        alert("fail");
    })
}

$(document).on("click", "#btnAuthenticate", function () {
    var username = $("#txtUsername").val();
    var password = $("#txtPassword").val();

    AuthenticateUser(username, password, function (result) {
        localStorage.setItem('username', username);
        window.location.href = "/Git/GetPullRequest";
    });
})