
const gameArea = document.querySelector('.game-area')
const soundClick = document.getElementById('sound-click')
const soundWinner = document.getElementById('sound-winner')

let mark = ''
let soundOn = false

const clickSound = () => {
    if (soundOn === true) {
        soundClick.play()
    }
}

const playWinnerSound = () => {
    if (soundOn === true) {
        soundWinner.play()
    }
}

gameArea.addEventListener('click', e => {

    clickSound()
    market(e)
    checkPossibilityWinner()
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
       
        playWinnerSound()
        setTimeout(() => {
            alert('🔴 VENCEU!')
        }, 1000); 

        setTimeout(() => {
         this.location.reload()   
        }, 2000); 
    } 
    
    if(gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[3].innerText === '❌' && gameArea.childNodes[5].innerText === '❌' || gameArea.childNodes[7].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[11].innerText === '❌' || gameArea.childNodes[13].innerText === '❌' && gameArea.childNodes[15].innerText === '❌' && gameArea.childNodes[17].innerText === '❌' || gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[7].innerText === '❌' && gameArea.childNodes[13].innerText === '❌' || gameArea.childNodes[3].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[15].innerText === '❌' || gameArea.childNodes[5].innerText === '❌' && gameArea.childNodes[11].innerText === '❌' && gameArea.childNodes[17].innerText === '❌' || gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[17].innerText === '❌' || gameArea.childNodes[5].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[13].innerText === '❌') {
        
        playWinnerSound()
        setTimeout(() => {
            alert('❌ VENCEU!')
        }, 1000);
        
        setTimeout(() => {
            this.location.reload()   
           }, 2000); 
    }    
}



