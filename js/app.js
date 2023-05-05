import { markerWithSoundEffect, playMusic } from "./sounds-effects.js";
import { checkPossibilityWinner, gameArea } from "./check-victory.js";


let market = "";
let x_Market = '❌'
let o_Market = '⭕'

const placeMarker = (e) => {
    const pressedMarkedSquare = e.target.innerText !== "";
    const variableIsNotEmpty = market !== "";

    if (pressedMarkedSquare) {
        return;
    }

    if (variableIsNotEmpty) {
        e.target.innerText = x_Market;

        market = "";
    }

    if (e.target.innerText === "") {
        e.target.innerText = o_Market;

        market = "⭕";
    } else {
        e.target.innerText = x_Market;
    }
};

gameArea.addEventListener("click", (e) => {
    markerWithSoundEffect();
    placeMarker(e);
    checkPossibilityWinner();
});

export { x_Market, o_Market }






