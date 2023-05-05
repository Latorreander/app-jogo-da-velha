import { gameArea } from "./check-victory.js";

const clearGameArea = () => {
    
    if( (gameArea.childNodes[1].innerText !== "" ||
    gameArea.childNodes[3].innerText !== "" ||
    gameArea.childNodes[5].innerText !== "") ||
(gameArea.childNodes[7].innerText !== "" ||
    gameArea.childNodes[9].innerText !== "" ||
    gameArea.childNodes[11].innerText !== "") ||
(gameArea.childNodes[13].innerText !== "" ||
    gameArea.childNodes[15].innerText !== "" ||
    gameArea.childNodes[17].innerText !== "") ||
(gameArea.childNodes[1].innerText !== "" ||
    gameArea.childNodes[7].innerText !== "" ||
    gameArea.childNodes[13].innerText !== "") ||
(gameArea.childNodes[3].innerText !== "" ||
    gameArea.childNodes[9].innerText !== "" ||
    gameArea.childNodes[15].innerText !== "") ||
(gameArea.childNodes[5].innerText !== "" ||
gameArea.childNodes[11].innerText !== "" ||
    gameArea.childNodes[17].innerText !== "") ||
(gameArea.childNodes[1].innerText !== "" ||
    gameArea.childNodes[9].innerText !== "" ||
    gameArea.childNodes[17].innerText !== "") ||
(gameArea.childNodes[5].innerText !== "" ||
    gameArea.childNodes[9].innerText !== "" ||
    gameArea.childNodes[13].innerText !== ""))

    { 
        gameArea.childNodes[1].innerText = "" 
        gameArea.childNodes[3].innerText = "" 
        gameArea.childNodes[5].innerText = ""
    gameArea.childNodes[7].innerText = "" 
        gameArea.childNodes[9].innerText = "" 
        gameArea.childNodes[11].innerText = ""
    gameArea.childNodes[13].innerText = "" 
        gameArea.childNodes[15].innerText = "" 
        gameArea.childNodes[17].innerText = "" 
    gameArea.childNodes[1].innerText = "" 
        gameArea.childNodes[7].innerText = "" 
        gameArea.childNodes[13].innerText = "" 
    gameArea.childNodes[3].innerText = "" 
        gameArea.childNodes[9].innerText = "" 
        gameArea.childNodes[15].innerText = "" 
    gameArea.childNodes[5].innerText = "" 
    gameArea.childNodes[11].innerText = "" 
        gameArea.childNodes[17].innerText = "" 
    gameArea.childNodes[1].innerText = "" 
        gameArea.childNodes[9].innerText = "" 
        gameArea.childNodes[17].innerText = "" 
    gameArea.childNodes[5].innerText = "" 
        gameArea.childNodes[9].innerText = "" 
        gameArea.childNodes[13].innerText = ""
        
    }
 
}
export { clearGameArea }
