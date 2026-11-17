const gamesel = document.getElementById('gameSelect')
const message = document.getElementById('message')
const borbutton = document.getElementById('borrowButton')
const retbutton = document.getElementById('returnButton')
const gamelist = document.getElementById('gameList')
const borname = document.getElementById('borrowerName')

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

function renderGames() {
    gamelist.textContent = '';

    game.forEach((game) => {
        const li = document.createElement('li');

        let status;
        if (game.borrower === null) {
            status = 'Свободна';
        } else {
            status = 'Взял(а): ' + game.borrower;
        }

        li.textContent = game.title + ' · ' + game.players + ' игрока · ' + status;
        gamelist.append(li);
    });
}
renderGames();