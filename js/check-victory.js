import { pauseMusic, playWinnerSoundEffect, playtiedSoundEffect, winnerFinnaly } from "./sounds-effects.js";
import { clearGameArea } from "./clear-game.js";

const gameArea = document.querySelector(".game-area");
const x_Points = document.getElementById('X')
const o_Points = document.getElementById('O')

const messageVictory_O = "CÍRCULO VENCEU👏👏❗"
const messageVictory_X = "XIS VENCEU👏👏❗"

const checkPossibilityWinner = () => {

     if (
        (gameArea.childNodes[1].innerText === "⭕" &&
            gameArea.childNodes[3].innerText === "⭕" &&
            gameArea.childNodes[5].innerText === "⭕") ||
        (gameArea.childNodes[7].innerText === "⭕" &&
            gameArea.childNodes[9].innerText === "⭕" &&
            gameArea.childNodes[11].innerText === "⭕") ||
        (gameArea.childNodes[13].innerText === "⭕" &&
            gameArea.childNodes[15].innerText === "⭕" &&
            gameArea.childNodes[17].innerText === "⭕") ||
        (gameArea.childNodes[1].innerText === "⭕" &&
            gameArea.childNodes[7].innerText === "⭕" &&
            gameArea.childNodes[13].innerText === "⭕") ||
        (gameArea.childNodes[3].innerText === "⭕" &&
            gameArea.childNodes[9].innerText === "⭕" &&
            gameArea.childNodes[15].innerText === "⭕") ||
        (gameArea.childNodes[5].innerText === "⭕" &&
            gameArea.childNodes[11].innerText === "⭕" &&
            gameArea.childNodes[17].innerText === "⭕") ||
        (gameArea.childNodes[1].innerText === "⭕" &&
            gameArea.childNodes[9].innerText === "⭕" &&
            gameArea.childNodes[17].innerText === "⭕") ||
        (gameArea.childNodes[5].innerText === "⭕" &&
            gameArea.childNodes[9].innerText === "⭕" &&
            gameArea.childNodes[13].innerText === "⭕")
    ) 
    {
        o_Points.lastElementChild.innerText ++
    
        playWinnerSoundEffect();
        setTimeout(() => {
            
            clearGameArea()
        }, 1000);
        
        if(o_Points.lastElementChild.innerText === '3') {
            setTimeout(() => {
                pauseMusic()
                winnerFinnaly()
                alert(messageVictory_O)
                
            }, 1000);
        }
    }

    if (
        (gameArea.childNodes[1].innerText === "❌" &&
            gameArea.childNodes[3].innerText === "❌" &&
            gameArea.childNodes[5].innerText === "❌") ||
        (gameArea.childNodes[7].innerText === "❌" &&
            gameArea.childNodes[9].innerText === "❌" &&
            gameArea.childNodes[11].innerText === "❌") ||
        (gameArea.childNodes[13].innerText === "❌" &&
            gameArea.childNodes[15].innerText === "❌" &&
            gameArea.childNodes[17].innerText === "❌") ||
        (gameArea.childNodes[1].innerText === "❌" &&
            gameArea.childNodes[7].innerText === "❌" &&
            gameArea.childNodes[13].innerText === "❌") ||
        (gameArea.childNodes[3].innerText === "❌" &&
            gameArea.childNodes[9].innerText === "❌" &&
            gameArea.childNodes[15].innerText === "❌") ||
        (gameArea.childNodes[5].innerText === "❌" &&
            gameArea.childNodes[11].innerText === "❌" &&
            gameArea.childNodes[17].innerText === "❌") ||
        (gameArea.childNodes[1].innerText === "❌" &&
            gameArea.childNodes[9].innerText === "❌" &&
            gameArea.childNodes[17].innerText === "❌") ||
        (gameArea.childNodes[5].innerText === "❌" &&
            gameArea.childNodes[9].innerText === "❌" &&
            gameArea.childNodes[13].innerText === "❌")
    ) 
    {
        x_Points.lastElementChild.innerText ++
    
        playWinnerSoundEffect()
        setTimeout(() => {
            
            clearGameArea()
        }, 1000); 
        
        if(x_Points.lastElementChild.innerText === '3') {
            setTimeout(() => {
                pauseMusic()
                winnerFinnaly()
                alert(messageVictory_X)
                
            }, 500);
        }
    } 

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

export { checkPossibilityWinner, gameArea, x_Points, o_Points };
