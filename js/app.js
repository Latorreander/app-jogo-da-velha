
const gameArea = document.querySelector('.game-area')
const soundClick = document.getElementById('sound-click')
const soundWinner = document.getElementById('sound-winner')
const soundOn_Off = document.querySelector('#button-on-off')
const resetButton = document.querySelector('#reset')
const soundEffectButtons = document.getElementById('soundEffect-buttons')
const buttonsArea = document.querySelector('.buttons-area')

let mark = ''
let soundOn = true

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


soundOn_Off.addEventListener('click', () => {
    pushingButtonSoundEffect()
    if(soundOn === true) {
      soundOn = false  
    }else {
       soundOn = true
    }
})

resetButton.addEventListener('click', () => {
   pushingButtonSoundEffect()
   setTimeout(() => {
    this.location.reload()
   }, 1000);
    
})


const market = (e) => {
    
    const pressedMarkedSquare = e.target.innerText !== ''
    const variableIsNotEmpty = mark !== ''

    if (pressedMarkedSquare) {

        return
      }
    
      if (variableIsNotEmpty){
        
        e.target.innerText = '❌'

        mark = ''
    
      }
    
      if (e.target.innerText === '' ) {
       
        e.target.innerText = '⭕'
       
        mark = '⭕'
       
      } else {
    
        e.target.innerText = '❌'     
    
      }  
}

const checkPossibilityWinner = () => {
   
    if(gameArea.childNodes[1].innerText === '⭕' && gameArea.childNodes[3].innerText === '⭕' && gameArea.childNodes[5].innerText === '⭕' || gameArea.childNodes[7].innerText === '⭕' && gameArea.childNodes[9].innerText === '⭕' && gameArea.childNodes[11].innerText === '⭕' || gameArea.childNodes[13].innerText === '⭕' && gameArea.childNodes[15].innerText === '⭕' && gameArea.childNodes[17].innerText === '⭕' || gameArea.childNodes[1].innerText === '⭕' && gameArea.childNodes[7].innerText === '⭕' && gameArea.childNodes[13].innerText === '⭕' || gameArea.childNodes[3].innerText === '⭕' && gameArea.childNodes[9].innerText === '⭕' && gameArea.childNodes[15].innerText === '⭕' || gameArea.childNodes[5].innerText === '⭕' && gameArea.childNodes[11].innerText === '⭕' && gameArea.childNodes[17].innerText === '⭕' || gameArea.childNodes[1].innerText === '⭕' && gameArea.childNodes[9].innerText === '⭕' && gameArea.childNodes[17].innerText === '⭕' || gameArea.childNodes[5].innerText === '⭕' && gameArea.childNodes[9].innerText === '⭕' && gameArea.childNodes[13].innerText === '⭕') {
       
        playWinnerSoundEffect()
        setTimeout(() => {
            alert('🔴 VENCEU!')
        }, 1000); 

        setTimeout(() => {
         this.location.reload()   
        }, 2000); 
    } 
    
    if(gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[3].innerText === '❌' && gameArea.childNodes[5].innerText === '❌' || gameArea.childNodes[7].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[11].innerText === '❌' || gameArea.childNodes[13].innerText === '❌' && gameArea.childNodes[15].innerText === '❌' && gameArea.childNodes[17].innerText === '❌' || gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[7].innerText === '❌' && gameArea.childNodes[13].innerText === '❌' || gameArea.childNodes[3].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[15].innerText === '❌' || gameArea.childNodes[5].innerText === '❌' && gameArea.childNodes[11].innerText === '❌' && gameArea.childNodes[17].innerText === '❌' || gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[17].innerText === '❌' || gameArea.childNodes[5].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[13].innerText === '❌') {
        
        playWinnerSoundEffect()
        setTimeout(() => {
            alert('❌ VENCEU!')
        }, 1000);
        
        setTimeout(() => {
            this.location.reload()   
           }, 2000); 
    }    
}

gameArea.addEventListener('click', e => {

    markerWithSoundEffect()
    market(e)
    checkPossibilityWinner()
})





