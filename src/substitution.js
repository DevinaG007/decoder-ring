// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function (input, alphabet, encode = true) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== alpha.length) return false;
    for (let i = 1; i < alphabet.length; i++) { //checks for duplicate characters in the alphabet
      let firstChar = alphabet[0];
      if (firstChar === alphabet[i]) {
        return false;
      } else {
        firstChar = alphabet[i];
      }
    }
    let message = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") message += input[i];
        if (!encode){ //decoding the input message
        for (let j = 0; j < alphabet.length; j++) {
          if (input[i] === alphabet[j]) {
            message += alpha[j];
          }
        }
      }
      else if (encode){ //encoding the input message
        for (let j = 0; j < alpha.length; j++) {
          if (input[i]=== alpha[j]) {
            message += alphabet[j]
          }
        }
      }
      }
      return message.toLowerCase();
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
