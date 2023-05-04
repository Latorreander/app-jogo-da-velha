import { pushingButtonSoundEffect, pauseMusic, playMusic } from "./sounds-effects.js";

const soundOn_Off = document.querySelector("#button-on-off");
const resetButton = document.querySelector("#reset");

let soundOn = true;

soundOn_Off.addEventListener("click", () => {
    pushingButtonSoundEffect();
    
    if (soundOn === true) {
        pauseMusic();
        soundOn = false;
    } else {
        soundOn = true;
        playMusic();  
    }
});

resetButton.addEventListener("click", () => {
    pushingButtonSoundEffect();
 
    setTimeout(() => {
        window.location.reload();
    }, 500);
});

export { soundOn };
