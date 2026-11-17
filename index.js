const gamesel = document.getElementById('gameSelect')
const message = document.getElementById('message')
const borbutton = document.getElementById('borrowButton')
const retbutton = document.getElementById('returnButton')
const gamelist = document.getElementById('gameList')
const borname = document.getElementById('borrowerName')

const game = [
    { titel: "Каркассон", players: 4, borrower: null },
    { title: "Доббль", players: 6, borrower: 'Аня' },
    { title: "Шахматы", players: 2, borrower: null }
]


retbutton.addEventListener('click', () => {
    let selectedGame = game[Number(gamesel.value)]
    if (selectedGame.borrower === null) {
        game[0].name = borname.value
        message.innerHTML = ""
    }
    else {
        message.innerHTML = "error"
    }
    renderGames();
});

borbutton.addEventListener('click', () => {
    let selectedGame = game[Number(gamesel.value)]
    if (selectedGame.borrower != null) {
        game[Number(gamesel.value)].name = null
        message.innerHTML = ""
    }
    else {
        message.innerHTML = ""
    }
    renderGames();
});

function renderGames() {
    gameList.innerHTML = '';
    games.forEach((game, index) => {
        const item = document.createElement('li');
        
    });
  }
  renderGames();