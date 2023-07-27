// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const findMatchingLetter = (input, shift, encode) => {
    let message = input.toLowerCase();
    let decoded = "";
    let newLetter = "";
    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        decoded += message[i]; //adds spaces and special characters back to the message
      } else {
        for (let j = 0; j < alphabet.length; j++) {
          if (message[i] === alphabet[j]) {
            let index;
            if (!encode) {
              index = j - shift;
            } else if (encode) {
              index = j + shift;
            }
            if (index >= alphabet.length) index -= alphabet.length;
            if (index < 0) index += alphabet.length;
            newLetter = alphabet[index];
            decoded += newLetter;
          }
        }
      }
    }
    return decoded;
  };

  function caesar(input, shift, encode = true) {
    if (
      shift === 0 ||
      shift > 25 ||
      shift < -25 ||
      !shift ||
      shift == undefined
    )
      return false;
    const createMessage = findMatchingLetter(input, shift, encode);
    return createMessage;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
