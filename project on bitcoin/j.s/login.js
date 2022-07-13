class User{
    constructor(){
        this.btn = document.querySelector("button");
    }
    login(){
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;
    
        let email1 = localStorage.getItem("email");
        let pass1 = localStorage.getItem("password");
        
        if (email == email1 && pass == pass1) {
            window.location.href = "home.html"
        }
        else{
            alert("email and pass is inccorect")
        }
    }
}

let myUser = new User();
myUser.btn.addEventListener("click",function(){
    myUser.login();
    
})
