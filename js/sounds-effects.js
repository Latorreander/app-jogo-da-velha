import { soundOn } from "./control-buttons.js";

const clickSound = document.getElementById("sound-click");
const winnerSound = document.getElementById("winner-sound");
const buttonSounds = document.getElementById("soundEffect-buttons");
const musicSound = document.getElementById("music-sound");
const winnerFinnalySound = document.getElementById("winner-finnaly");
const tiedSound = document.getElementById("tied-music");

const pauseMusic = () => {
    musicSound.pause();
};

const playMusic = () => {
    musicSound.play();
};

const markerWithSoundEffect = () => {
    if (soundOn) {
        clickSound.play();
    }
};

const playWinnerSoundEffect = () => {
    if (soundOn) {
        winnerSound.play();
    }
};

const playtiedSoundEffect = () => {
    if (soundOn) {
        tiedSound.play();
    }
};

const buttonClickSounds = () => {
    buttonSounds.play();
};

const winnerFinnaly = () => {
    if (soundOn) {
        winnerSound.pause();
        winnerFinnalySound.play();
    }
};

export {
    playWinnerSoundEffect,
    buttonClickSounds,
    markerWithSoundEffect,
    pauseMusic,
    playMusic,
    playtiedSoundEffect,
    winnerFinnaly,
};
