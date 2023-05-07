import { o_Market } from "./app.js";
import { gameArea } from "./check-victory.js";

const divRisk = document.querySelector('.risk')

const risk = () => {
   
    if((gameArea.childNodes[1].innerText == o_Market, 
        gameArea.childNodes[3].innerText == o_Market, 
        gameArea.childNodes[5].innerText == o_Market)) 
        {
            console.log('caiu')    
            divRisk.style.display = 'block'
    }
}


const rotateRisk45 = () => {
    divRisk.style.transform = 'rotate(45deg)';
    divRisk.style.display = 'block'
    
}

// rotateRisk45()

const rotateRiskMinus45 = () => {
    divRisk.style.transform = 'rotate(-45deg)';
    divRisk.style.display = 'block'
}

// rotateRiskMinus45()

const rotateRisk90 = () => {
    divRisk.style.transform = 'rotate(90deg)';
    divRisk.style.display = 'block'
}

// rotateRisk90()

// (gameArea.childNodes[1].innerText === o_Market &&
//     gameArea.childNodes[3].innerText === o_Market &&
//     gameArea.childNodes[5].innerText === o_Market) ||
// (gameArea.childNodes[7].innerText === o_Market &&
//     gameArea.childNodes[9].innerText === o_Market &&
//     gameArea.childNodes[11].innerText === o_Market) ||
// (gameArea.childNodes[13].innerText === o_Market &&
//     gameArea.childNodes[15].innerText === o_Market &&
//     gameArea.childNodes[17].innerText === o_Market) ||
// (gameArea.childNodes[1].innerText === o_Market &&
//     gameArea.childNodes[7].innerText === o_Market &&
//     gameArea.childNodes[13].innerText === o_Market) ||
// (gameArea.childNodes[3].innerText === o_Market &&
//     gameArea.childNodes[9].innerText === o_Market &&
//     gameArea.childNodes[15].innerText === o_Market) ||
// (gameArea.childNodes[5].innerText === o_Market &&
//     gameArea.childNodes[11].innerText === o_Market &&
//     gameArea.childNodes[17].innerText === o_Market) ||
// (gameArea.childNodes[1].innerText === o_Market &&
//     gameArea.childNodes[9].innerText === o_Market &&
//     gameArea.childNodes[17].innerText === o_Market) ||
// (gameArea.childNodes[5].innerText === o_Market &&
//     gameArea.childNodes[9].innerText === o_Market &&
//     gameArea.childNodes[13].innerText === o_Market)




export { risk }