
avtar()

function changepassword() {
    let current = document.getElementById("current").value;
    let newpass = document.getElementById("newpass").value;
    let confirmpass = document.getElementById("confirmpass").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("No user is logged in");
        return false;
    }

    let user = users.find(function (u) {
        return u.email == currentUser.email;
    });

    if (!user) {
        alert("User not found");
        return false;
    }

    if (current == "" || newpass == "" || confirmpass == "") {
        alert("Please fill all ");
        return false;
    }
    else if (current != user.password) {
        alert("Current password is incorrect");
        return false;
    }

    else if (newpass.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }
    else if (newpass != confirmpass) {
        alert("Passwords must be same");
        return false;

    }
    else {

        user.password = newpass;

        localStorage.setItem("users", JSON.stringify(users));

        currentUser.password = newpass;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        alert("Password Updated Successfully");
        return false;
    }


}
//for avtar



function avtar() {

    let user = JSON.parse(localStorage.getItem("currentUser"));


    if (user) {

        document.getElementById("name").textContent = user.firstName + " " + user.lastName;
        document.getElementById("email").textContent = user.email;

        let firstLetter = user.firstName.charAt(0).toUpperCase();
        let secondLetter = user.lastName.charAt(0).toUpperCase();

        document.getElementById("bt1").textContent = firstLetter + secondLetter;
    }
};

// for signout
function signout() {

    if (confirm("Are you sure you want to sign out?")) {
        window.location.href = "./signin.html";
    }
    else {
        return false;
    }

}