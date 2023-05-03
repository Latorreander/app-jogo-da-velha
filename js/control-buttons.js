import { pushingButtonSoundEffect } from "./sounds-effects.js";

const soundOn_Off = document.querySelector("#button-on-off");
const resetButton = document.querySelector("#reset");

let soundOn = true;

soundOn_Off.addEventListener("click", () => {
    pushingButtonSoundEffect();
    if (soundOn === true) {
        soundOn = false;
    } else {
        soundOn = true;
    }
});

resetButton.addEventListener("click", () => {
    pushingButtonSoundEffect();
    setTimeout(() => {
        window.location.reload();
    }, 1000);
});

export { soundOn };
