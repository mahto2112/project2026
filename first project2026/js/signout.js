function signout() {

    if (confirm("Are you sure you want to sign out?")) {
        window.location.href = "/signin.html";
    }
    else {
        alert("Sign out canceled.");
    }
}