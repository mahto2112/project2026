avtar();
function profile() {
    let first = document.getElementById("fname").value;
    let mail = document.getElementById("mail").value;
    let pin = document.getElementById("pin").value;
    let country = document.getElementById("country").value;
    let git = document.getElementById("git").value;
    let dob = document.getElementById("dob").value;
    let tel = document.getElementById("tel").value;
    let add = document.getElementById("add").value;
    let city = document.getElementById("city").value;
   

    if (first == "" || mail == "" || pin == "" || add == "" || city == "" || country == "" || git == "" || dob == "" || tel == "" ) {
        alert("All fields are required");
        return false;
    }
    else if (first.length < 2) {
        alert("Enter valid Name");
        return false;
    }
    else if(!/^[A-Za-z ]+$/.test(first)) {
        alert("name should contain only alphabet");
        return false;
    }
    else if (!mail.endsWith("@gmail.com")) {
        alert("Please enter a valid email");
        return false;
    }
    else if(!/^[6-9]\d{9}$/.test(tel)){
        alert("enter a valid 10 digit no.");
        return false;
    }
    else if(!/^\d{6}$/.test(pin)){
        alert("enter a valid 6 digit PIN ");
        return false;
    }
 else {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    currentUser.fullName = first;
    currentUser.email = mail;
    currentUser.pin = pin;
    currentUser.country = country;
    currentUser.github = git;
    currentUser.dob = dob;
    currentUser.phone = tel;
    currentUser.address = add;
    currentUser.city = city;

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    alert("Profile saved successfully");
    return true;
}
}
// for automatic load email or name when we signin
function showUser() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        document.getElementById("fname").value = currentUser.firstName + " " +currentUser.lastName;
        document.getElementById("mail").value = currentUser.email;
    }
}

showUser();

//logout
function signout() {

    if (confirm("Are you sure you want to sign out?")) {
        window.location.href = "./signin.html";
    }
    else{
        return false;
    }
  
}
//for avatar



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


 

