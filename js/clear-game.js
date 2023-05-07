
import { cells } from "./check-victory.js";

const clearGameArea = () => {
    cells.forEach((cell) => (cell.innerText = ""));
};

export { clearGameArea };
