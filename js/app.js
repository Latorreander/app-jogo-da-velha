import { markerWithSoundEffect } from "./sounds-effects.js";
import { checkPossibilityWinner, gameArea } from "./check-victory.js";


let mark = "";

const placeMarker = (e) => {
    const pressedMarkedSquare = e.target.innerText !== "";
    const variableIsNotEmpty = mark !== "";

    if (pressedMarkedSquare) {
        return;
    }

    if (variableIsNotEmpty) {
        e.target.innerText = "❌";

        mark = "";
    }

    if (e.target.innerText === "") {
        e.target.innerText = "⭕";

        mark = "⭕";
    } else {
        e.target.innerText = "❌";
    }
};

gameArea.addEventListener("click", (e) => {
    markerWithSoundEffect();
    placeMarker(e);
    checkPossibilityWinner();
});
