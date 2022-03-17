const difficultyButton = document.getElementById("selectDifficulty");

difficultyButton.addEventListener('click', () =>{
    let form = document.getElementById('form_difficulties');
    let selectedDifficulty = form.querySelector('input[name = difficulties]:checked').value;
    
    switch(selectedDifficulty){
        case 'easy':
            window.location.href = "./difficulties/easy.html";
            break;
        case 'medium':
            window.location.href = "./difficulties/medium.html";
            break;
        case 'hard':
            window.location.href = "./difficulties/hard.html";
            break;    
        default:
            alert("Elige una dificultad...");
            break;
    }
});

const easyScore = document.getElementById("easyScore");
const mediumScore = document.getElementById("mediumScore");
const hardScore = document.getElementById("hardScore");

const setScores = (easy, medium, hard) =>{
    easy.innerHTML = (localStorage.clickCounterEasy === undefined) ? "Sin puntuación" : localStorage.clickCounterEasy;
    medium.innerHTML = (localStorage.clickCounterMedium === undefined) ? "Sin puntuación" : localStorage.clickCounterMedium;
    hard.innerHTML = (localStorage.clickCounterHard === undefined) ? "Sin puntuación" : localStorage.clickCounterHard;
}

setScores(easyScore, mediumScore, hardScore);

