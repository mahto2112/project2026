

avtar()


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

//for logout
function signout() {

    if (confirm("Are you sure you want to sign out?")) {
        window.location.href = "./signin.html";
    }
    else{
        return false;
    }
  
}