if(sessionStorage.length>0){
    var nickname = sessionStorage.getItem("nickname");
    document.getElementById("header").innerHTML = "<div class='header'>" +
    "<div class='header-left'>" +
        "<i class='logox'>Vibefy</i>" +
    "</div>" +
    "<div class='header-right'> " +
        "<a href='home.html'><i>Home</i></a>" +
        "<a href='login.html' onclick='logout()' ><i>Logout</i></a>" +
        "<i id='welcome' style='font-weight: bold;'>"+nickname+"</i>"+
    "</div>" +
    "</div>";
}
else{
document.getElementById("header").innerHTML = "<div class='header'>" +
"<div class='header-left'>" +
    "<i class='logox'>Vibefy</i>" +
"</div>" +
"<div class='header-right'> " +
    "<a href='home.html'><i>Home</i></a>" +
    "<a href='register.html'><i>Register</i></a>" +
    "<a href='login.html'><i>Login</i></a>" +
"</div>" +
"</div>";
}

function logout()
{
    sessionStorage.clear();
}