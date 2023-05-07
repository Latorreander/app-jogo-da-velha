import { playtiedSoundEffect } from "./sounds-effects.js"
import { cells } from "./check-victory.js"

let amount = 0

const tiedCondition = () => {

    const getTied = cells => {
        const winningCombinations = [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [2, 4, 6]
       ]
    
       const tied =  winningCombinations.some( combination => combination.every( index => cells[index].textContent !== ''))
       
       if ( tied  ){
           amount += 1

        } 

        if ( amount >= 7 ) {

            playtiedSoundEffect()
            setTimeout(() => {
                
                cells.forEach( cell => cell.innerText = "")    
            }, 1000);
            
        }
    }

    getTied(cells)
}

export { tiedCondition }


