// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  function caesar(input, shift, encode = true) {
    let message = input.toLowerCase();
    let decoded = "";
    if (
      shift === 0 ||
      shift > 25 ||
      shift < -25 ||
      !shift ||
      shift == undefined
    )
      return false;
    if (!encode) {
      let newLetter = "";
      for (let i = 0; i < message.length; i++) {
        if (!alphabet.includes(message[i])) {
          decoded += message[i];
        } else {
          for (let j = 0; j < alphabet.length; j++) {
            if (message[i] === alphabet[j]) {
              let index = j - shift;
              if (index >= alphabet.length) index -= alphabet.length;
              if (index < 0) index += alphabet.length;
              newLetter = alphabet[index];
              decoded += newLetter;
            }
          }
        }
      }
      return decoded;
    }
    if (encode) {
      let newLetter = "";
      for (let i = 0; i < message.length; i++) {
        if (!alphabet.includes(message[i])) {
          decoded += message[i];
        } else {
          for (let j = 0; j < alphabet.length; j++) {
            if (message[i] === alphabet[j]) {
              let index = j + shift;
              if (index > alphabet.length) index -= alphabet.length;
              if (index < 0) index += alphabet.length;
              newLetter = alphabet[index];
              decoded += newLetter;
            }
          }
        }
      }
      return decoded;
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
