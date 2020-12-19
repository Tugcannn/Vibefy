function isStored(nickname, password){
    for(var i = 0; i < localStorage.length/6; i++){
        if(localStorage.getItem(`nickname ${i}`) == nickname && localStorage.getItem(`password ${i}`) == password)
            return true;
    }
    return false;
}

function save(event){
    var nickname = document.getElementById("nickname").value;
    var password = document.getElementById("password").value;
    if(isStored(nickname, password)){
        if(nickname==="" || password===""){
            window.confirm("One of your fields is empty");
        }
        else{
            sessionStorage.setItem('nickname', nickname);
            sessionStorage.setItem('password', password);
            event.preventDefault();
            window.location.replace("../html/home.html");
        }
    }
    else{
        window.confirm("Your nickname or password is wrong.");
    }
}
