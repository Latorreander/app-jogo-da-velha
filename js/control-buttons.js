import { pushingButtonSoundEffect, pauseMusic, playMusic } from "./sounds-effects.js";
import { clearGameArea } from "./clear-game.js";

const sound_On_Off = document.querySelector("#button-on-off");
const resetButton = document.querySelector("#reset-button");
const music_On_Off = document.querySelector('#music-on-off')

let soundOn = true;
let musicOn = true

sound_On_Off.addEventListener("click", () => {
    pushingButtonSoundEffect();
    
    if ( soundOn ) {
        soundOn = false;
    } 
    else {
        soundOn = true;  
    }
});

resetButton.addEventListener("click", () => {
    pushingButtonSoundEffect();
 
        window.location.reload()
 
});

music_On_Off.addEventListener('click', () => {
    pushingButtonSoundEffect()

    if ( musicOn ) {
        musicOn = false
        pauseMusic()
       
    }
    else {
        musicOn = true
        playMusic()
        
    }
})

    


export { soundOn, musicOn };
