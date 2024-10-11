import { getValidatedWholeNumber, getValidatedWholePositiveNumber, getValidatedGreaterThanValue, getYesOrNo } from '../getAnswer/index.js';
import { getRandomInt } from '../helpers/index.js';

export async function settingsPhase() {
  console.clear()

  let tries = 15
  let min = 0
  let max = 20
  let hints = true
  let settingsPhase = await getYesOrNo("Do you want to edit the game settings")

  if (settingsPhase) {
      tries = await getValidatedWholePositiveNumber("How many tries")
      hints = await getYesOrNo("Will the game give hints")
      min = await getValidatedWholeNumber("Enter the minimum random number value")
      max = await getValidatedGreaterThanValue("Enter the maximum random number value", min)
  }
  return {
    "tries": tries,
    "min": min,
    "max": max,
    "hints": hints
  }
}

export async function gameLoop(tries, min, max, hints) {
  console.clear()

  const randomNumber = getRandomInt(min, max);
  while (tries > 0) {
      let guess = await getValidatedWholeNumber("Guess a number")
      
      if (guess === randomNumber) {
          return {
            "win": true,
            "triesLeft": tries,
            "correctAnswer": randomNumber
          }
      }
  
      if (hints) {
          if (guess > randomNumber)
              console.log("Try again, too high!")
          else
              console.log("Try again, too low!")
      } else if (tries > 1) {
          console.log("Try again!");
      }
  
      tries--;
  }
  return {
    "win": false,
    "triesLeft": 0,
    "correctAnswer": randomNumber
  }
}