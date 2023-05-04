import { pushingButtonSoundEffect, pauseMusic, playMusic } from "./sounds-effects.js";

const sound_On_Off = document.querySelector("#button-on-off");
const resetButton = document.querySelector("#reset-button");
const music_On_Off = document.querySelector('#music-on-off')

let soundOn = true;
let musicOn = true

sound_On_Off.addEventListener("click", () => {
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
        
    }, 500);
});

music_On_Off.addEventListener('click', () => {
    pushingButtonSoundEffect()

    if(musicOn) {
        musicOn = false
        pauseMusic()
    }else{
        musicOn = true
        playMusic()
    }
})

    


export { soundOn, musicOn };
