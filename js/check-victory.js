import {
    pauseMusic,
    playWinnerSoundEffect,
    winnerFinnaly,
} from "./sounds-effects.js";

import { clearGameArea } from "./clear-game.js";

import { o_Market, x_Market } from "./app.js";
import { rounds } from "./rounds.js";
import { tiedCondition } from "./tie-condition.js";

// import { risk } from "./scratch.js";

const creditsMessage = `ME SIGA NO LINKEDIN: https://www.linkedin.com/in/anderson-latorre-cabral-a48b78201/
 
OBRIGADO!`;

const gameArea = document.querySelector(".game-area");
const x_Points = document.getElementById("X");
const o_Points = document.getElementById("O");
const divMessage = document.querySelector(".message");
const cells = document.querySelectorAll(".square");

const checkPossibilityWinner = () => {
    const getWinner = (cells) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        const o_Victory = winningCombinations.some((combination) =>
            combination.every((index) => cells[index].textContent === o_Market)
        );

        const x_Victory = winningCombinations.some((combination) =>
            combination.every((index) => cells[index].textContent === x_Market)
        );

        if (o_Victory) {
            circleVictoryReturn();
        }

        if (x_Victory) {
            xisVictoryReturn();
        } else {
            tiedCondition();
        }
    };

    getWinner(cells);
};

const circleVictoryReturn = () => {
    o_Points.lastElementChild.innerText++;
    //    risk()
    playWinnerSoundEffect();
    setTimeout(() => {
        clearGameArea();
    }, 1000);

    if (o_Points.lastElementChild.innerText === rounds) {
        pauseMusic();
        winnerFinnaly();

        divMessage.innerHTML = `<h1>${o_Market} VENCEU!</h1>`;

        setTimeout(() => {

            divMessage.classList.add("active");
            gameArea.classList.add("removed");
        }, 500);

        setTimeout(() => {
            confirm("JOGAR NOVAMENTE?")
                ? window.location.reload()
                : alert(creditsMessage);
        }, 3000);
    }
};

const xisVictoryReturn = () => {
    x_Points.lastElementChild.innerText++;

    playWinnerSoundEffect();
    setTimeout(() => {
        clearGameArea();
    }, 1000);

    if (x_Points.lastElementChild.innerText === rounds) {
        pauseMusic();
        winnerFinnaly();

        setTimeout(() => {

            divMessage.innerHTML = `<h1>${x_Market} VENCEU!</h1>`;

            divMessage.classList.add("active");
            gameArea.classList.add("removed");
        }, 500);
       
        setTimeout(() => {
            confirm("JOGAR NOVAMENTE?")
            ? window.location.reload()
            : alert(creditsMessage);
        }, 3000);
    }
};

export { gameArea, x_Points, o_Points, cells, checkPossibilityWinner };
