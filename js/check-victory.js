import { pauseMusic, playWinnerSoundEffect, playtiedSoundEffect, winnerFinnaly } from "./sounds-effects.js";

import { clearGameArea } from "./clear-game.js";

import { o_Market, x_Market } from "./app.js";
import { rounds } from "./rounds.js";

const gameArea = document.querySelector(".game-area");
const x_Points = document.getElementById('X')
const o_Points = document.getElementById('O')
const divMessage = document.querySelector('.message')

const checkPossibilityWinner = () => {

     if (
        (gameArea.childNodes[1].innerText === o_Market &&
            gameArea.childNodes[3].innerText === o_Market &&
            gameArea.childNodes[5].innerText === o_Market) ||
        (gameArea.childNodes[7].innerText === o_Market &&
            gameArea.childNodes[9].innerText === o_Market &&
            gameArea.childNodes[11].innerText === o_Market) ||
        (gameArea.childNodes[13].innerText === o_Market &&
            gameArea.childNodes[15].innerText === o_Market &&
            gameArea.childNodes[17].innerText === o_Market) ||
        (gameArea.childNodes[1].innerText === o_Market &&
            gameArea.childNodes[7].innerText === o_Market &&
            gameArea.childNodes[13].innerText === o_Market) ||
        (gameArea.childNodes[3].innerText === o_Market &&
            gameArea.childNodes[9].innerText === o_Market &&
            gameArea.childNodes[15].innerText === o_Market) ||
        (gameArea.childNodes[5].innerText === o_Market &&
            gameArea.childNodes[11].innerText === o_Market &&
            gameArea.childNodes[17].innerText === o_Market) ||
        (gameArea.childNodes[1].innerText === o_Market &&
            gameArea.childNodes[9].innerText === o_Market &&
            gameArea.childNodes[17].innerText === o_Market) ||
        (gameArea.childNodes[5].innerText === o_Market &&
            gameArea.childNodes[9].innerText === o_Market &&
            gameArea.childNodes[13].innerText === o_Market)

    ) { circleVictoryReturn() }
    

    if (
        (gameArea.childNodes[1].innerText === x_Market &&
            gameArea.childNodes[3].innerText === x_Market &&
            gameArea.childNodes[5].innerText === x_Market) ||
        (gameArea.childNodes[7].innerText === x_Market &&
            gameArea.childNodes[9].innerText === x_Market &&
            gameArea.childNodes[11].innerText === x_Market) ||
        (gameArea.childNodes[13].innerText === x_Market &&
            gameArea.childNodes[15].innerText === x_Market &&
            gameArea.childNodes[17].innerText === x_Market) ||
        (gameArea.childNodes[1].innerText === x_Market &&
            gameArea.childNodes[7].innerText === x_Market &&
            gameArea.childNodes[13].innerText === x_Market) ||
        (gameArea.childNodes[3].innerText === x_Market &&
            gameArea.childNodes[9].innerText === x_Market &&
            gameArea.childNodes[15].innerText === x_Market) ||
        (gameArea.childNodes[5].innerText === x_Market &&
            gameArea.childNodes[11].innerText === x_Market &&
            gameArea.childNodes[17].innerText === x_Market) ||
        (gameArea.childNodes[1].innerText === x_Market &&
            gameArea.childNodes[9].innerText === x_Market &&
            gameArea.childNodes[17].innerText === x_Market) ||
        (gameArea.childNodes[5].innerText === x_Market &&
            gameArea.childNodes[9].innerText === x_Market &&
            gameArea.childNodes[13].innerText === x_Market)

    ) { xisVictoryReturn() } 

      else if ((gameArea.childNodes[1].innerText !== "" &&
    gameArea.childNodes[3].innerText !== "" &&
    gameArea.childNodes[5].innerText !== "") &&
        (gameArea.childNodes[7].innerText !== "" &&
    gameArea.childNodes[9].innerText !== "" &&
    gameArea.childNodes[11].innerText !== "") &&
        (gameArea.childNodes[13].innerText !== "" &&
    gameArea.childNodes[15].innerText !== "" &&
    gameArea.childNodes[17].innerText !== "") &&
        (gameArea.childNodes[1].innerText !== "" &&
    gameArea.childNodes[7].innerText !== "" &&
    gameArea.childNodes[13].innerText !== "") &&
        (gameArea.childNodes[3].innerText !== "" &&
    gameArea.childNodes[9].innerText !== "" &&
    gameArea.childNodes[15].innerText !== "") &&
        (gameArea.childNodes[5].innerText !== "" &&
    gameArea.childNodes[11].innerText !== "" &&
    gameArea.childNodes[17].innerText !== "") &&
        (gameArea.childNodes[1].innerText !== "" &&
    gameArea.childNodes[9].innerText !== "" &&
    gameArea.childNodes[17].innerText !== "") &&
        (gameArea.childNodes[5].innerText !== "" &&
    gameArea.childNodes[9].innerText !== "" &&
    gameArea.childNodes[13].innerText !== "")
    
    ) {
        setTimeout(() => {
           
            clearGameArea()
        }, 1000); 
        
        playtiedSoundEffect()
    }
   
};


const circleVictoryReturn = () => {

    o_Points.lastElementChild.innerText ++
    
    playWinnerSoundEffect();
    setTimeout(() => {
        
        clearGameArea()
    }, 1000);
    
    if(o_Points.lastElementChild.innerText === rounds) {
        pauseMusic()
        winnerFinnaly()

        divMessage.innerHTML = `<h1>${o_Market} VENCEU!</h1>`

        divMessage.classList.add('active')
        gameArea.classList.add('removed')
        setTimeout(() => {
            window.location.reload()
        }, 8000);     
    } 

}

const xisVictoryReturn = () => {

    x_Points.lastElementChild.innerText ++
    
    playWinnerSoundEffect()
    setTimeout(() => {
        
        clearGameArea()
    }, 1000); 
    
    if(x_Points.lastElementChild.innerText === rounds) {
        pauseMusic()
        winnerFinnaly()

        divMessage.innerHTML = `<h1>${x_Market} VENCEU!</h1>`

        divMessage.classList.add('active')
        gameArea.classList.add('removed')
            
        setTimeout(() => {
        window.location.reload()
        }, 8000); 
    }  
}

export { checkPossibilityWinner, gameArea, x_Points, o_Points };
