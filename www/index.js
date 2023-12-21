import { Universe } from "premrust";

const pre = document.getElementById("game-of-life-canvas");
const playPauseButton = document.getElementById("play-pause");
const universe = Universe.new();
let animationId = null;

playPauseButton.textContent = "Play game of life ▶";

const isPaused = () => {
    return animationId === null;
};

const play = () => {
    playPauseButton.textContent = "Pause game of life ⏸";
    renderLoop();
};

const pause = () => {
    playPauseButton.textContent = "Play game of life ▶";
    cancelAnimationFrame(animationId);
    animationId = null;
};

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    animationId = requestAnimationFrame(renderLoop);
};

playPauseButton.addEventListener("click", event => {
    if (isPaused()) {
        play();
    } else {
        pause();
    }
});
