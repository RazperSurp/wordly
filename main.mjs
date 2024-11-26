import Game from './game.mjs';

const START_BUTTON = document.getElementById('start-game');
START_BUTTON.onclick = e => {
    window._game = new Game();
}