import { soundOn } from "./control-buttons.js"

const soundClick = document.getElementById('sound-click')
const winnerSound = document.getElementById('winner-sound')
const soundEffectButtons = document.getElementById('soundEffect-buttons')
const musicSound = document.getElementById('music-sound')
const tiedGameSound = document.getElementById('tied-game-sound')



const pauseMusic = () => {
    musicSound.pause()  
}


const playMusic = () => {
    musicSound.play()
  
}

const markerWithSoundEffect = () => {
    if ( soundOn ) {
        soundClick.play()
    }
}

const playWinnerSoundEffect = () => {
    if ( soundOn ) {
        winnerSound.play()
    }
}

const playtiedSoundEffect = () => {
    if ( soundOn ) {
        tiedGameSound.play()
    }
}

const pushingButtonSoundEffect = () => {
    soundEffectButtons.play()
}



export { playWinnerSoundEffect, pushingButtonSoundEffect, markerWithSoundEffect, pauseMusic, playMusic, playtiedSoundEffect }