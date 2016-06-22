function AuthenticateUser(username, password) {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/user",
        dataType: 'json',
        async: false,
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
    })
    .done(function (result) {
        alert("success");
    })
    .fail(function (error) {
        alert("fail");
    })
}

$(document).on("click", "#btnAuthenticate", function () {
    var username = $("#txtUsername").val();
    var password = $("#txtPassword").val();

    AuthenticateUser(username, password);
})