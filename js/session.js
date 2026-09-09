const loggedIn =
    sessionStorage.getItem(
        "kudiflow_logged_in"
    );


if (loggedIn !== "true") {

    window.location.href =
        "session-expired.html";

}