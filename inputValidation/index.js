import InputError from "../errors/index.js";

export const checkYesOrNo = (input) => {
  if (input === "y") return true
  if (input === "n") return false
  throw new InputError("Input error!", "Please use y or n as answer!")
}

export const validatedInput = (input, errMsg, validationFunction) => {
  if (validationFunction(input)) return input
  throw new InputError("Input error!", errMsg)
}