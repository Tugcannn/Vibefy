var value = localStorage.length/5 ;

function doFirst(){ 

    var button = document.getElementById('button'); 
    button.addEventListener('click',save,false);
    // display();

} 
function save(){ 
    var name = document.getElementById('first_name').value;
    var surname = document.getElementById('last_name').value;
    var nickname = document.getElementById('nickname').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    localStorage.setItem(`first_name ${value}`, name);
    localStorage.setItem(`last_name ${value}`, surname);
    localStorage.setItem(`nickname ${value}`, nickname);
    localStorage.setItem(`password ${value}`, password);
    localStorage.setItem(`email ${value}`, email);
       

    // for(var i = 0 ; i < localStorage.length; i++){
        
    // localStorage.getItem('first_name')
    // }

    // display();
    // name.value="";
    // surname.value="";
    // nickname.value="";
    // password.value="";
    // email.value="";

} 
// function display(){

//     var display_data = document.getElementById('display_data');
//     display_data.innerHTML="";
//     for(var i = 0 ; i < localStorage.length; i++){
//         var a = localStorage.key(i);
//         var b = localStorage.getItem(a);
//         display_data.innerHTML += a +" - " + b + "<br>";

//     }
// }

// function clear(){

//     localStorage.clear();
//     location.reload();

// }

window.addEventListener('load',doFirst,false);