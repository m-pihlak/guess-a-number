export default class InputError extends Error {
    constructor(message, fixMessage) {
      super(message);
      this.name = "InputError";
      this.fixMessage = fixMessage;
    }
}

//throw new CustomError('This is really bad', true);