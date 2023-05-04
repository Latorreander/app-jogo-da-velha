import { playWinnerSoundEffect, playtiedSoundEffect } from "./sounds-effects.js";

const gameArea = document.querySelector(".game-area");

const messageVictory_O = "⭕ VENCEU👏👏❗"
const messageVictoryX = "❌ VENCEU👏👏❗"
const messageTiedGame = " EMPATOU 😮😮❗"

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
        playWinnerSoundEffect();
        setTimeout(() => {
            alert(messageVictory_O);
        }, 1000);

        setTimeout(() => {
            window.location.reload();
        }, 2000); 
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
        playWinnerSoundEffect();
        setTimeout(() => {
            alert(messageVictoryX);
        }, 1000) 

        setTimeout(() => {
            window.location.reload();
        }, 2000)
    } 

    else if( 
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
        alert(messageTiedGame)
       }, 500);

        setTimeout(() => {
            window.location.reload();
        }, 2000); 
    }
};

export { checkPossibilityWinner, gameArea };
