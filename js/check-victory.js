import { playWinnerSoundEffect } from "./sounds-effects.js";

const gameArea = document.querySelector(".game-area");

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
    ) {
        playWinnerSoundEffect();
        setTimeout(() => {
            alert("🔴 VENCEU!");
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
    ) {
        playWinnerSoundEffect();
        setTimeout(() => {
            alert("❌ VENCEU!");
        }, 1000);

        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
};

export { checkPossibilityWinner, gameArea };
