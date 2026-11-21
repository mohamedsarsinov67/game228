const gamesel = document.getElementById('gameSelect');
const message = document.getElementById('message');
const borbutton = document.getElementById('borrowButton');
const retbutton = document.getElementById('returnButton');
const gamelist = document.getElementById('gameList');
const borname = document.getElementById('borrowerName');
const showHint = document.getElementById('showHint');
const add = document.getElementById('add');
const Gamename = document.getElementById('name');
const que = document.getElementById('qua');

const game = [
    { title: 'Каркассон', players: 4, borrower: null },
    { title: 'Доббль', players: 6, borrower: 'Аня' },
    { title: 'Шахматы', players: 2, borrower: null },
    { title: 'ОПА', players: 2, borrower: null }
];

borbutton.addEventListener('click', () => {
    const index = Number(gamesel.value);
    if (index < 0 || index >= game.length) {
        message.textContent = 'Выберите игру из списка';
        return;
    }

    let selectedGame = game[index];

    if (!borname.value.trim()) {
        message.textContent = 'Введите имя';
        return;
    }

    if (selectedGame.borrower !== null) {
        message.textContent = 'Игра уже выдана';
        return;
    }

    selectedGame.borrower = borname.value.trim();
    message.textContent = 'Игра выдана';
    renderGames();
    renderGameOptions(); 
});

retbutton.addEventListener('click', () => {
    const index = Number(gamesel.value);
    if (index < 0 || index >= game.length) {
        message.textContent = 'Выберите игру из списка';
        return;
    }

    let selectedGame = game[index];

    if (selectedGame.borrower === null) {
        message.textContent = 'Игра уже свободна';
        return;
    }

    selectedGame.borrower = null;
    message.textContent = 'Игра возвращена';
    renderGames();
    renderGameOptions();
});

showHint.addEventListener('change', () => {
    renderGames();
});

add.addEventListener('click', () => {
    const gamenameValue = Gamename.value.trim();
    const quaValue = Number(que.value);

    if (!gamenameValue) {
        message.textContent = 'Укажите название игры';
        return;
    }
    if (quaValue <= 0 || Number.isNaN(quaValue)) {
        message.textContent = 'Количество игроков должно быть числом > 0';
        return;
    }

    game.push({
        title: gamenameValue,
        players: quaValue,
        borrower: null
    });

    message.textContent = 'Игра добавлена';
    renderGames();
    renderGameOptions();
    
    Gamename.value = '';
    que.value = '';
});

function renderGames() {
    gamelist.textContent = '';

    game.forEach((item) => {
        const LI = document.createElement('li');

        let status;
        if (item.borrower === null) {
            status = 'Свободна';
        } else {
            status = 'Взял(а): ' + item.borrower;
        }

        
        if (!showHint.checked && item.borrower !== null) {
            return; 
        }

        LI.textContent = `${item.title} · ${item.players} игрока · ${status}`;
        gamelist.append(LI);
    });
}

function renderGameOptions() {
    gamesel.innerHTML = '';
    game.forEach((el, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = el.title;
        gamesel.append(opt);
    });
    
    if (game.length > 0) {
        gamesel.value = 0;
    }
}

renderGames();
renderGameOptions();
