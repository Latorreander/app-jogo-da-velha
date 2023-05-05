import { buttonClickSounds, pauseMusic, playMusic } from "./sounds-effects.js";

import { x_Points, o_Points } from "./check-victory.js";

import { clearGameArea } from "./clear-game.js";

const sound_On_Off = document.querySelector("#on-off-button");
const resetButton = document.querySelector("#reset-button");
const music_On_Off = document.querySelector('#music-on-off')
const clearButton = document.querySelector('#clear-button')


let soundOn = true;
let musicOn = false

sound_On_Off.addEventListener("click", () => {
    buttonClickSounds();
    
    if ( soundOn ) {
        soundOn = false;
    } 
    else {
        soundOn = true;  
    }
});

resetButton.addEventListener("click", () => {
    buttonClickSounds();
 
    o_Points.lastElementChild.innerText = 0
    x_Points.lastElementChild.innerText = 0
 
});

music_On_Off.addEventListener('click', () => {
    buttonClickSounds()
    
    if ( musicOn ) {

        pauseMusic()
        musicOn = false
     
    }
    else {
        musicOn = true
        playMusic()
        
    }
})

clearButton.addEventListener('click', () => {
    buttonClickSounds()
    clearGameArea()
})

export { soundOn, musicOn };
