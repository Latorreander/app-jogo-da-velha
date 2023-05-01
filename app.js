
const gameArea = document.querySelector('.game-area')
const soundClick = document.getElementById('sound-click')
const soundWinner = document.getElementById('sound-winner')

let mark = ''
let soundOn = true

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

    if (e.target.innerText !== '') {
        return
      }
    
      if (mark !== ''){
        
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
            alert('BOLA VENCEU!')
        }, 1000); 

        setTimeout(() => {
         this.location.reload()   
        }, 2000); 
    } 
    
    if(gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[3].innerText === '❌' && gameArea.childNodes[5].innerText === '❌' || gameArea.childNodes[7].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[11].innerText === '❌' || gameArea.childNodes[13].innerText === '❌' && gameArea.childNodes[15].innerText === '❌' && gameArea.childNodes[17].innerText === '❌' || gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[7].innerText === '❌' && gameArea.childNodes[13].innerText === '❌' || gameArea.childNodes[3].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[15].innerText === '❌' || gameArea.childNodes[5].innerText === '❌' && gameArea.childNodes[11].innerText === '❌' && gameArea.childNodes[17].innerText === '❌' || gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[17].innerText === '❌' || gameArea.childNodes[5].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[13].innerText === '❌') {
        
        playWinnerSound()
        setTimeout(() => {
            alert('"X" VENCEU!')
        }, 1000);
        
        setTimeout(() => {
            this.location.reload()   
           }, 2000); 
    }    
}








//  //horizontal possibility Winner
//  if(gameArea.childNodes[1].innerText === '⭕' && gameArea.childNodes[3].innerText === '⭕' && gameArea.childNodes[5].innerText === '⭕') {
//     alert('⭕ GANHOU!')
// }
// if(gameArea.childNodes[7].innerText === '⭕' && gameArea.childNodes[9].innerText === '⭕' && gameArea.childNodes[11].innerText === '⭕') {
//     alert('⭕ GANHOU!')
// }
// if(gameArea.childNodes[13].innerText === '⭕' && gameArea.childNodes[15].innerText === '⭕' && gameArea.childNodes[17].innerText === '⭕') {
//     alert('⭕ GANHOU!')
// }

// //vertical possibility winner
// if(gameArea.childNodes[1].innerText === '⭕' && gameArea.childNodes[7].innerText === '⭕' && gameArea.childNodes[13].innerText === '⭕' ) {
//     alert('⭕ GANHOU!')
// }
// if(gameArea.childNodes[3].innerText === '⭕' && gameArea.childNodes[9].innerText === '⭕' && gameArea.childNodes[15].innerText === '⭕' ) {
//     alert('⭕ GANHOU!')
// }
// if(gameArea.childNodes[5].innerText === '⭕' && gameArea.childNodes[11].innerText === '⭕' && gameArea.childNodes[17].innerText === '⭕' ) {
//     alert('⭕ GANHOU!')
// }

// //diagonal possibility winner
// if(gameArea.childNodes[1].innerText === '⭕' && gameArea.childNodes[9].innerText === '⭕' && gameArea.childNodes[17].innerText === '⭕') {
//     alert('⭕ GANHOU!')
// }
// if(gameArea.childNodes[5].innerText === '⭕' && gameArea.childNodes[9].innerText === '⭕' && gameArea.childNodes[13].innerText === '⭕') {
//     alert('⭕ GANHOU!')
// }


// // horizontal possibility winner
// if(gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[3].innerText === '❌' && gameArea.childNodes[5].innerText === '❌') {
//     playWinnerSound()
//     alert('❌ GANHOU!')
// }
// if(gameArea.childNodes[7].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[11].innerText === '❌') {
//     playWinnerSound()
//     alert('❌ GANHOU!')
// }
// if(gameArea.childNodes[13].innerText === '❌' && gameArea.childNodes[15].innerText === '❌' && gameArea.childNodes[17].innerText === '❌') {
//     playWinnerSound()
//     alert('❌ GANHOU!')
// }

// //vertical possibility winner
// if(gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[7].innerText === '❌' && gameArea.childNodes[13].innerText === '❌') {
//     playWinnerSound()
//     alert('❌ GANHOU!')
// }
// if(gameArea.childNodes[3].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[15].innerText === '❌') {
//     playWinnerSound()
//     alert('❌ GANHOU!')
// }
// if(gameArea.childNodes[5].innerText === '❌' && gameArea.childNodes[11].innerText === '❌' && gameArea.childNodes[17].innerText === '❌') {
//     playWinnerSound()
//     alert('❌ GANHOU!')
// }

// //diagonal possibility winner
// if(gameArea.childNodes[1].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[17].innerText === '❌') {
//     playWinnerSound()
//     alert('❌ GANHOU!')
// }
// if(gameArea.childNodes[5].innerText === '❌' && gameArea.childNodes[9].innerText === '❌' && gameArea.childNodes[13].innerText === '❌') {
//     playWinnerSound()
//     alert('❌ GANHOU!')
// }