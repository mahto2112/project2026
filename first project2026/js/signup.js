function signup(){
    let Firstname = document.getElementById("fname").value;
    let Lastname = document.getElementById("lname").value;
    let email = document.getElementById("email").value.trim();
    let Password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;


    if(Firstname ==="" || Lastname ==="" || email ==="" || Password ==="" || confirmPassword==="" ){
        alert("Please fill all the boxes.");
        return false;

    }
    if(Password.length < 8 ){
        alert("Password must be at least 8 characteers long.");
        return false;

    }
    if(Password !== confirmPassword){
        alert("password does't match.");
        return false;
    }
    if(!terms){
        alert("plaase agree to thr terms.");
        return false;

    }
    if(!email.endsWith("@gmail.com")){
        alert("only gmail addresses are allowed.");
        return false;

    }
    else{
        alert("Account created successfully!");
    }
    


}