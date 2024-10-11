import promptSync from 'prompt-sync'

import { checkYesOrNo, validatedInput } from "../inputValidation/index.js";

const prompt = promptSync()

const isWholePositiveNumber = (input) => /^\d+$/.test(input)
const isWholeNumber = (input) => /^-?\d+$/.test(input)

function getValidatedInput(msg, errMsg, validationFunction) {
    while (true) {
        try {
            return validatedInput(
                prompt(msg + ": "), 
                errMsg, 
                validationFunction)
        } catch (error) {
            console.clear()
            console.log(error)
        }
    }
}

export async function getValidatedWholePositiveNumber(msg) {
    return 1*getValidatedInput(msg, "Not a whole positive number!", isWholePositiveNumber)   
}

export async function getValidatedWholeNumber(msg) {
    return 1*getValidatedInput(msg, "Not a whole number!", isWholeNumber)   
}

export async function getValidatedGreaterThanValue(msg, min) {
    while (true) {
        let max = await getValidatedWholeNumber(msg)
        try {
            return await validatedInput(max, 
                "Make sure that max > min!", 
                (max) => min < max)
        } catch (error) {
            console.clear()
            console.log(error)
        }
    }
}

export async function getYesOrNo(msg) {
    while (true) {
        try {
            return checkYesOrNo(prompt(msg + " (y/n): "))
        } catch (error) {
            console.clear()
            console.log(error)
        }
    }   
}