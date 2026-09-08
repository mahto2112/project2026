
function signup() {
    let first = document.getElementById("fname").value.trim();
    let last = document.getElementById("lname").value;
    let mail = document.getElementById("mail").value;
    let password = document.getElementById("pass").value;
    let confirm = document.getElementById("conf").value;
    let checkbox = document.getElementById("checked");

    if (first == "" || last == "" || mail == "" || password == "" || confirm == "") {
        alert("All fields are required");
        return false;
    }
    else if (first.length < 2 || last.length < 2) {
        alert("Enter valid Name");
        return false;
    }
    else if (!/^[A-Za-z]+$/.test(first) || !/^[A-Za-z]+$/.test(last)) {
        alert("name should contain only alphabet");
        return false;
    }
    else if (!mail.endsWith("@gmail.com")) {         // regex   / ^[^@\s] + @[^@\s] + \.[^@\s] + {8,}+ $ /
        alert("Please enter a valid email");
        return false;
    }
    else if (password.length < 8) {
        alert("Password must be of at least 8 character's");
        return false;
    }
    else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password)) {
        alert("Password must contain at least one character, one number, and one special character");
        return false;
    }
    else if (confirm != password) {
        alert("Password and confirm password must be same");
        return false;
    }
    else if (!checkbox.checked) {
        alert("please read terms & conditions");
        return false;
    }
    else {

        let users = JSON.parse(localStorage.getItem("users")) || [];


        // New user
        let user = {
            firstName: first,
            lastName: last,
            email: mail,
            password: password
        };

        // Add new user
        users.push(user);

        // Save users
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully");

        window.location.href = "./signin.html";

        return false;

    }
}
