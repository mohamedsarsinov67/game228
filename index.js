const gamesel = document.getElementById('gameSelect')
const message = document.getElementById('message')
const borbutton = document.getElementById('borrowButton')
const retbutton = document.getElementById('returnButton')
const gamelist = document.getElementById('gameList')
const borname = document.getElementById('borrowerName')
const showHint = document.getElementById('showHint');
const hint = document.getElementById('hint');


const game = [
    { title: 'Каркассон', players: 4, borrower: null },
    { title: 'Доббль', players: 6, borrower: 'Аня' },
    { title: 'Шахматы', players: 2, borrower: null }
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

function renderGames() {
    gamelist.textContent = '';



    game.forEach((game) => {
        const LI = document.createElement('li');

        let status;
        if (showHint.checked) {
            if (game.borrower === null) {
                LI.textContent = game.title + ' · ' + game.players + ' игрока · ' + status;
                gamelist.append(LI);
            }
        }
        else {
            LI.textContent = game.title + ' · ' + game.players + ' игрока · ' + status;
            gamelist.append(LI);
        }
        
        if (game.borrower === null) {
            status = 'Свободна';
            
        } else {
            status = 'Взял(а): ' + game.borrower;
            
        }
        
    });

}
renderGames();