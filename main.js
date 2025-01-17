let lamp = document.getElementById("lamp")
let btn = document.getElementById("btn")



btn.addEventListener (`click`,()=>{
    
    if(btn.textContent.includes("Spegni")){
        lamp.src="./img-5/white_lamp.png";
        btn.textContent="Accendi";
    }else{
     lamp.src="./img-5/yellow_lamp.png"
     btn.textContent="Spegni";
}

isOn=!isOn
})

