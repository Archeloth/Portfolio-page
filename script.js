//Hamburger
const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdown');
let isClicked = false;

hamburger.addEventListener('click', ()=>{
    if(isClicked===false){
        isClicked=true;
        dropdownMenu.style.right = "0";
    }else{
        isClicked=false;
        dropdownMenu.style.right = "-100%";
    }
});

//------------------------------------------------------------
