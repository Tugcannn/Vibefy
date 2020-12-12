document.getElementById('my_footer').innerHTML = "<div class='main-content'>"+
"<div class='left box'>"+
   "<h2><i>About</i></h2>"+
   "<div class='content'>"+
      "<p><i>Vibefy is a web project developed by four students who have took the CS 391(Web Programming)"+
            "course.</i></p>"+
   "</div>"+
   "<br>"+
      "<div class='bottom'>"+
         "<span class='credit'><i>Created By <b>Vibefy &nbsp;</b></i></a></span>"+
         "<span class='far fa-copyright'></span> 2020 All rights reserved."+
      "</div>"+
   "</br>"+
"</div>"+
"<div class='center box'>"+
   "<h2><i>Address</i></h2>"+
   "<div class='content'>"+
      "<div class='place'>"+
         "<span class='fas fa-map-marker-alt'></span>"+
         "<span class='text'><i>&nbsp; Istanbul, Turkey</i></span>"+
      "</div>"+
   "</div>"+
"</div>"+
"<div class='right box'>"+
   "<h2><i>Contact us</i></h2>"+
   "<div class='content'>"+
      "<div class='email'>"+
         "<span class='fas fa-envelope' style='font-size:24px;'></span>"+
         "<span class='text'><b><i>&nbsp; E-mail</i></b></span>"+
         "<p><i>uygar.kaya@ozu.edu.tr</i></p>"+
         "<p><i>tuna.tuncer@ozu.edu.tr</i></p>"+
         "<p><i>onur.alacam@ozu.edu.tr</i></p>"+
         "<p><i>tugcan.hoser@ozu.edu.tr</i></p>"+
      "</div>"+
   "</div>"+
"</div>"+
"</div>"+
"<style>"+
   "#my_footer {"+
      "background: #141418;"+
      "color: white;"+
      "margin-left: 5rem;"+
      "padding: 0rem;"+
      "overflow: hidden;"+
   "}"+

   ".main-content {"+
      "display: flex;"+
   "}"+
   ".main-content .box {"+
      "flex-basis: 50%;"+
      "padding: 10px 20px;"+
   "}"+
   ".box h2 {"+
      "font-size: 1.125rem;"+
      "font-weight: 600;"+
      "text-transform: uppercase;"+
   "}"+
   ".box .content {"+
      "margin: 20px 0 0 0;"+
      "position: relative;"+
   "}"+
   ".box .content:before {"+
      "position: absolute;"+
      "content: '';"+
      "top: -10px;"+
      "height: 2px;"+
      "width: 100%;"+
      "background:  #222222;"+
   "}"+
   ".box .content:after {"+
      "position: absolute;"+
      "content: '';"+
      "height: 2px;"+
      "width: 15%;"+
      "background: #f12020;"+
      "top: -10px;"+
   "}"+
   ".content .fas {"+
      "font-size: 1.4375rem;"+
      "background: #DA81F5;"+
      "height: 45px;"+
      "width: 45px;"+
      "line-height: 45px;"+
      "text-align: center;"+
      "border-radius: 50%;"
      "transition: 0.3s;"+
      "cursor: pointer;"+
   "}"+
   ".center .content .fas:hover {"+
      "background: #f12020;"+
   "}"+
   ".center .content .text {"+
      "font-size: 1.0625rem;"+
      "font-weight: 500;"+
      "padding-left: 10px;"+
   "}"+
   ".bottom center {"+
      "padding: 2px;"+
      "font-size: 0.9375rem;"+
      "background: #151515;"+
   "}"+
   ".fa-envelope {"+
      "color: #DA81F5;"+
   "}"+
   "@media screen and (max-width: 900px) {"+
      "footer {"+
         "position: relative;"+
         "bottom: 0px;"+
      "}"+
      ".main-content {"+
         "flex-wrap: wrap;"+
         "flex-direction: column;"+
      "}"+
      ".main-content .box {"+
         "margin: 5px 0;"+
      "}"+
   "}"+
"</style>";