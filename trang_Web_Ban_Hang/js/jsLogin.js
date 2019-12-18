function check_login() {
    let user_name = document.getElementById("user_name").value;
    let pasw = document.getElementById("password").value;

    if (user_name == "admin" && pasw == 123){
        window.location.href = 'index.html'
    }else {
        alert("user : admin ----- pasw : 123")
    }

}