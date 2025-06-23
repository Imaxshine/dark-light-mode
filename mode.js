

function Mode(){
    localStorage.setItem('mode','dark')
   const CurrentMode = localStorage.getItem('mode')
   if(CurrentMode == "dark"){
    let body = document.querySelector('#mainBody');
    let = BtnContent = document.getElementById('mode')
    if(body.classList.contains('light')){
        body.classList.remove('light')
        body.classList.toggle('dark')
        BtnContent.innerHTML = "Light Mode"
    }else{
    localStorage.setItem('mode','light')
    if(body.classList.contains('dark')){
        body.classList.remove('dark');
        body.classList.toggle('light');
        BtnContent.innerHTML = "Dark Mode"
    }
   }
   }
}

// Function ya kuanzisha Mode
function InitiateMode(){
    let body = document.querySelector('#mainBody');
    let SavedMode = localStorage.getItem('mode');

    if(SavedMode === 'dark'){
        body.classList.remove('light')
        body.classList.add('dark')
    }else{
        body.classList.remove('dark')
        body.classList.add('light')
    }
}


window.addEventListener("DOMContentLoaded",InitiateMode)