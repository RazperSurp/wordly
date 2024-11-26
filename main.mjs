import Game from './game.mjs';

const START_BUTTON = document.getElementById('start-game');
START_BUTTON.onclick = e => {
    window._game = new Game();
}

document.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
        const KEYBOARD_KEY = document.querySelector(`button[data-value="13"]`);
        KEYBOARD_KEY.classList.add('pressed');
        setTimeout(() => { KEYBOARD_KEY.classList.remove('pressed') }, 150);

        if (window._game instanceof Game) {
            window._game.triggerGame(false);
            window._game.triggerGame();
        } else window._game = new Game();
    }
})