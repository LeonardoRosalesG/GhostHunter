var ghostCounter = 0;
var clickCounter = 0;
var win = false;
const paths = ["play1 infinite", "play2 infinite"];
function randomNumber(min, max) { 
    let num = Math.random();
    if(num > 0.5){
        return 1;
    }else{
        return 0;
    }
    
} 





const regresarElemento = nombreElemento =>{
    return document.getElementById(nombreElemento);
}
const checkRecords = ()=>{
    if(localStorage.clickCounterHard === undefined){
        regresarElemento("contadorClicks").innerHTML = "No hay records...";
    }else{
        regresarElemento("contadorClicks").innerHTML = "Número de clicks realizados: " + localStorage.clickCounterHard;
    }
}
// if(localStorage.clickCounter === 0){
//     localStorage.clickCounter = 0;
// }else{
//     let record = document.getElementById("contadorClicks");
//     record.innerHTML = "Número de clicks realizados: " + localStorage.clickCounter;

// }

checkRecords();

// const resetCounter= () => {

// }

const hardGhost = document.getElementById('hardGhost');
hardGhost.style.animation = paths[randomNumber(0,1)] + " 8s";

const playSection = document.getElementById("playSection");

playSection.addEventListener('click', ()=>{
    if(win){
        clickCounter = 0;
    }else{
        clickCounter++;
        regresarElemento("contadorClicks").innerHTML = "Número de clicks realizados: " + clickCounter;
    }
    

});

hardGhost.addEventListener('click', () =>{
    ghostCounter++;
    adpatableDifficulty(hardGhost);
    ghostCounter === 3 ? ganar(hardGhost) : acciones(ghostCounter);
});

const ganar = ghost => {
    win = true;
    ghost.style.animationPlayState = "paused"; 
    regresarElemento("contador").innerHTML = "";
    regresarElemento("mensaje").innerHTML = "¡Bien hecho!";
    changeAnimation(ghost)
    record(clickCounter);
    winner();
    regresarElemento("contadorClicks").innerHTML = "Número de clicks realizados: " + localStorage.clickCounterHard;
}
const acciones = (contador) => {
    document.getElementById("contador").innerHTML = contador;
    document.getElementById("mensaje").innerHTML = "Sigue Intentando ...";
}

const record = (currentClicks) =>{
    currentClicks++;
    if(localStorage.clickCounterHard == 0 || localStorage.clickCounterHard === undefined){
        localStorage.clickCounterHard = currentClicks;
    }else{
        if(currentClicks < localStorage.clickCounterHard){
            localStorage.clickCounterHard = currentClicks;
        }
    }
    
}

const homeIcon = document.getElementById("home");
homeIcon.addEventListener('click', ()=>{
    window.location.href = "../index.html";
});

const deleteIcon = document.getElementById("delete");
deleteIcon.addEventListener('click', ()=>{
    window.localStorage.removeItem("clickCounterHard");
    alert("Record eliminado");
    regresarElemento("contadorClicks").innerHTML = "Número de clicks realizados: " + localStorage.clickCounterHard;
    checkRecords();
});

const changeAnimation = (ghost) =>{
    if(win){
        ghost.style.animation = "infinite floating 2s";
    }
}



// const openHelp = () =>{
//     let help = document.getElementById("helpScreen");
//     help.style.display = "block";
// }
// const closeHelp = () =>{
//     let help = document.getElementById("helpScreen");
//     help.style.display = "none";
// }

const helpIcon = document.getElementById("help");
helpIcon.addEventListener('click', ()=>{
    let help = regresarElemento("helpScreen");
    help.style.display = "block";
    let ghost = regresarElemento("hardGhost");
    ghost.style.display = "none";
});

let closeHelpIcon = document.getElementById("okHelp");
closeHelpIcon.addEventListener('click', () =>{
    let help = regresarElemento("helpScreen");
    help.style.display = "none";
    let ghost = regresarElemento("hardGhost");
    ghost.style.display = "block";
});

const winner = ()=>{
    let winScr = regresarElemento("winScreen");
    winScr.style.display = "block";
    let ghost = regresarElemento("hardGhost");
    ghost.style.display = "none";
    const mensaje = regresarElemento("winnerMessage");
    const text = "¡Felicidades, atrapaste al fantasma!";
    let i=0;
    let deletrear = () =>{
            if (i < text.length) {
                mensaje.innerHTML += text.charAt(i);
                i++;
                setTimeout(deletrear, 50);
        }
    }
    deletrear();
}

const okWinner = document.getElementById("okWin");
okWinner.addEventListener('click', ()=>{
    let winScr = regresarElemento("winScreen");
    winScr.style.display = "none";
    let ghost = regresarElemento("hardGhost");
    ghost.style.display = "block";
})

const adpatableDifficulty = ghost =>{
    switch(ghostCounter){
        case 1:
            ghost.style.animation = paths[randomNumber(0,1)] + " 7s";
            ghost.style.height = "30px";
        break;
        case 2:
            ghost.style.animation = paths[randomNumber(0,1)] + " 5s";
            ghost.style.height = "10px";
    }
}