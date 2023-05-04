import { playWinnerSoundEffect, playtiedSoundEffect } from "./sounds-effects.js";
import { clearGameArea } from "./clear-game.js";

const gameArea = document.querySelector(".game-area");
const x_Points = document.getElementById('X')
const o_Points = document.getElementById('O')


const messageVictory_O = "⭕ VENCEU👏👏❗"
const messageVictory_X = "❌ VENCEU👏👏❗"
const messageTiedGame = "EMPATE😮😮❗"

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
    
        if(o_Points.lastElementChild.innerText === '5') {
            setTimeout(() => {
                alert(messageVictory_O)
                
            }, 500);
        }
        playWinnerSoundEffect();
        setTimeout(() => {
           
            clearGameArea()
        }, 1000);

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
    
        if(x_Points.lastElementChild.innerText === '5') {
            setTimeout(() => {
                alert(messageVictory_X)
                
            }, 500);
        }
        playWinnerSoundEffect();
        setTimeout(() => {
           
            clearGameArea()
        }, 1000);
 
    } 
    
     if( 
        (gameArea.childNodes[1].innerText !== "" &&
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
    )
    {  
        playtiedSoundEffect()
        setTimeout(() => {
       clearGameArea()
       }, 500);

    }
};
console.log(o_Points.lastElementChild.innerText)






export { checkPossibilityWinner, gameArea };
