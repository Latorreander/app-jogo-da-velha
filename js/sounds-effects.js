import { soundOn, musicOn } from "./control-buttons.js"

const soundClick = document.getElementById('sound-click')
const winnerSound = document.getElementById('winner-sound')
const soundEffectButtons = document.getElementById('soundEffect-buttons')
const musicEffect = document.getElementById('musicSound')
const tiedGameSound = document.getElementById('tied-game-sound')



const pauseMusic = () => {
    musicEffect.pause()  
}


const playMusic = () => {
    if(musicOn){
    musicEffect.play()
    }
     
}

const markerWithSoundEffect = () => {
    if (soundOn === true) {
        soundClick.play()
    }
}

const playWinnerSoundEffect = () => {
    if (soundOn === true) {
        winnerSound.play()
    }
}

const playtiedSoundEffect = () => {
    if (soundOn === true) {
        tiedGameSound.play()
    }
}

const pushingButtonSoundEffect = () => {
    soundEffectButtons.play()
}

export { playWinnerSoundEffect, pushingButtonSoundEffect, markerWithSoundEffect, pauseMusic, playMusic, playtiedSoundEffect }