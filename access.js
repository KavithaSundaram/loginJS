let eyeicon = document.getElementById("eyeicon")
let password = document.getElementById("password")

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text"
        eyeicon.src = "visibility.png"
    }else{
        password.type = "password"
        eyeicon.src = "visibility_off.png"
    }
}

var pass = document.getElementById("password")
var msg = document.getElementById("message")
var str = document.getElementById("strenth")

pass.addEventListener("input" ,function(){
    if(pass.value.length > 0){
        msg.style.display = "block"
    }
    else{
        msg.style.display = "none"
    }
    if(pass.value.length < 4){
        str.innerHTML = "weak"
        pass.style.borderColor ="#ff5925"
        msg.style.color = "#ff59255"
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
       str.innerHTML = "medium"
       pass.style.borderColor ="yellow"
       msg.style.color = "yellow"
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "strong"
        pass.style.borderColor ="#26d730"
        msg.style.color = "#26d730"
    }
})


let popup = document.getElementById("popup")

function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
}