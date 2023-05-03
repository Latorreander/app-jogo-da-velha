import { soundOn } from "./control-buttons.js"

const soundClick = document.getElementById('sound-click')
const soundWinner = document.getElementById('sound-winner')
const soundEffectButtons = document.getElementById('soundEffect-buttons')

const markerWithSoundEffect = () => {
    if (soundOn === true) {
        soundClick.play()
    }
}

const playWinnerSoundEffect = () => {
    if (soundOn === true) {
        soundWinner.play()
    }
}

const pushingButtonSoundEffect = () => {
    soundEffectButtons.play()
}

export { playWinnerSoundEffect, pushingButtonSoundEffect, markerWithSoundEffect }