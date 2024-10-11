import { settingsPhase, gameLoop } from "./gameLoop/index.js";

const { tries, min, max, hints } = await settingsPhase()

const { win, triesLeft, correctAnswer } = await gameLoop(tries, min, max, hints)

if (win) {
    console.log(`Correct! You win! You have ${triesLeft} tries left.`)
} else {
    console.log(`You lost! The correct number was ${correctAnswer}.`)
}