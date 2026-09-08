function signin() {

    let mail = document.getElementById("mail").value;
    let password = document.getElementById("pass").value;
    let checkbox = document.getElementById("checked");

    if (mail === "" || password === "") {
        alert("pass or conpass must be same");
        return false;
    }
    else if (!mail.endsWith("@gmail.com")) {
        alert("Please enter a valid email");
        return false;
    }
    else if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }
    else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password)) {
        alert("Password must contain at least one character, one number, and one special character");
        return false;
    }
    else if (!checkbox.checked) {
        alert("Please accept the terms and conditions");
        return false;
    }
    // Multiple users get from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check email and password
    let user = users.find(function (u) {
        return u.email === mail && u.password === password;
    });


    if (!user) {
        alert("This email does not exist");
        return false;
    }
    else if (user.password !== password) {
        alert("Invalid email or password");
        return false;

    } else {
        localStorage.setItem("currentUser", JSON.stringify(user));
        {
            alert("Login successfully");
            window.location.href = "./overview.html";

            return false;
        }
    }
}