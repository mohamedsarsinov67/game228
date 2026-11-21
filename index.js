const gamesel = document.getElementById('gameSelect')
const message = document.getElementById('message')
const borbutton = document.getElementById('borrowButton')
const retbutton = document.getElementById('returnButton')
const gamelist = document.getElementById('gameList')
const borname = document.getElementById('borrowerName')
const showHint = document.getElementById('showHint');
const hint = document.getElementById('hint');
const add = document.getElementById(`add!`)
const Gamename = document.getElementById(`name`)
const que = document.getElementById(`qua`)


const game = [
    { title: 'Каркассон', players: 4, borrower: null },
    { title: 'Доббль', players: 6, borrower: 'Аня' },
    { title: 'Шахматы', players: 2, borrower: null },
    { title: 'ОПА', players: 2, borrower: null }
];


borbutton.addEventListener('click', () => {
    let selectedGame = game[Number(gamesel.value)]
    if (borname.value === '') {
        message.textContent = 'Введите имя';
        return;
    }
    if (selectedGame.borrower !== null) {
        message.textContent = 'Игра уже выдана';
        return;
    }
    selectedGame.borrower = borname.value
    message.textContent = 'Игра выдана';
    
    renderGames();
});


retbutton.addEventListener('click', () => {
    let selectedGame = game[Number(gamesel.value)]
    if (selectedGame.borrower === null) {
        message.textContent = 'Игра уже свободна';
        return;
    }

    selectedGame.borrower = null;
    message.textContent = 'Игра возвращена';
    
    renderGames();
});

showHint.addEventListener('change', () => {
    
    renderGames();
});

add.addEventListener('click', () => {
    if(Gamename.value !== null && Number(que.value) > 0){
    game.push({title:Gamename.value, players:Number(que.value) , borrower:null})
    }
    else{
        message.textContent = `игра некоректно указана`
    }
    renderGameOptions()
    renderGames();
});

function renderGames() {
    gamelist.innerHTML = '';



    game.forEach((game) => {
        
        
        if(showHint && game.borrower == null){
            return 
        }
        let status;
        if (game.borrower === null) {
            status = 'Свободна';
        } else {
            status = 'Взял(а): ' + game.borrower;
        }
        const LI = document.createElement('li');
        LI.textContent = game.title + ' · ' + game.players + ' игрока · ' + status;
        gamelist.append(LI);
    });

}
function renderGameOptions(){
    gamesel.innerHTML = "";
    game.forEach((el, i) =>{
        const opt = document.createElement(`option`)
        opt.value = i
        opt.textContent = el.title
        gamesel.append(opt)
    });
    
}

renderGames();
renderGameOptions()