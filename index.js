const btn = document.querySelector(".btn")
const light = document.querySelector(".light")
const msg = document.querySelector(".msg")

btn.addEventListener("click",()=>{
    if(light.style.backgroundColor == "yellow"){
        light.style.backgroundColor ="white"
        btn.textContent = "ON"
        msg.style.backgroundColor = "red"
        msg.textContent= "Light is turned OFF"
    }else{
        light.style.backgroundColor ="yellow";
        btn.textContent = "OFF"
         msg.style.backgroundColor = "green"
        msg.textContent= "Light is turned ON"
    }
})