function chooseDifficulty(){
    let form = document.getElementById('form_difficulties');
    let difficulty = form.querySelector('input[name = difficulties]:checked').value;
    let ghost = document.getElementById("easyGhost");
    switch(difficulty){
        case 'easy':
            ghost.style.background = "pink";
        break;
    }
}

const buttonDifficulty = document.getElementById("selectDifficulty");

buttonDifficulty.addEventListener('click', chooseDifficulty());
