var ghostCounter = 0;
var clickCounter = 0;
var win = false;





const regresarElemento = nombreElemento =>{
    return document.getElementById(nombreElemento);
}
const checkRecords = ()=>{
    if(localStorage.clickCounterEasy === undefined){
        regresarElemento("contadorClicks").innerHTML = "No hay records...";
    }else{
        regresarElemento("contadorClicks").innerHTML = "Número de clicks realizados: " + localStorage.clickCounterEasy;
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

const mediumGhost = document.getElementById('easyGhost');

const playSection = document.getElementById("playSection");

playSection.addEventListener('click', ()=>{
    if(win){
        clickCounter = 0;
    }else{
        clickCounter++;
    regresarElemento("contadorClicks").innerHTML = "Número de clicks realizados: " + clickCounter;
    }
    

});

mediumGhost.addEventListener('click', () =>{
    ghostCounter++;
    ghostCounter === 3 ? ganar(mediumGhost) : acciones(ghostCounter);
});

const ganar = ghost => {
    win = true;
    ghost.style.animationPlayState = "paused"; 
    regresarElemento("contador").innerHTML = "";
    regresarElemento("mensaje").innerHTML = "¡Bien hecho!";
    changeAnimation(ghost)
    record(clickCounter);
    winner();
    regresarElemento("contadorClicks").innerHTML = "Número de clicks realizados: " + localStorage.clickCounterEasy;
}
const acciones = (contador) => {
    document.getElementById("contador").innerHTML = contador;
    document.getElementById("mensaje").innerHTML = "Sigue Intentando ...";
}

const record = (currentClicks) =>{
    currentClicks++;
    if(localStorage.clickCounterEasy == 0 || localStorage.clickCounterEasy === undefined){
        localStorage.clickCounterEasy = currentClicks;
    }else{
        if(currentClicks < localStorage.clickCounterEasy){
            localStorage.clickCounterEasy = currentClicks;
        }
    }
    
}

const homeIcon = document.getElementById("home");
homeIcon.addEventListener('click', ()=>{
    window.location.href = "../index.html";
});

const deleteIcon = document.getElementById("delete");
deleteIcon.addEventListener('click', ()=>{
    window.localStorage.removeItem("clickCounterEasy");
    alert("Record eliminado");
    regresarElemento("contadorClicks").innerHTML = "Número de clicks realizados: " + localStorage.clickCounterEasy;
    checkRecords();
});

const changeAnimation = (ghost) =>{
    if(win){
        ghost.style.animation = "infinite floating 2s";
    }
}


// Quise utilizar estas funciones en la partde de abajo pero no las reconocia,
// opté por usar arrow functions
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
    let ghost = regresarElemento("easyGhost");
    ghost.style.display = "none";
});

let closeHelpIcon = document.getElementById("okHelp");
closeHelpIcon.addEventListener('click', () =>{
    let help = regresarElemento("helpScreen");
    help.style.display = "none";
    let ghost = regresarElemento("easyGhost");
    ghost.style.display = "block";
});

const winner = ()=>{
    let winScr = regresarElemento("winScreen");
    winScr.style.display = "block";
    let ghost = regresarElemento("easyGhost");
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
    let ghost = regresarElemento("easyGhost");
    ghost.style.display = "block";
})