// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== alpha.length) return false;
    for (let i = 1; i < alphabet.length; i++) {
      let firstChar = alphabet[0];
      if (firstChar === alphabet[i]) {
        return false;
      } else {
        firstChar = alphabet[i];
      }
    }
    let message = "";
    if (!encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") message += input[i];
        for (let j = 0; j < alphabet.length; j++) {
          if (input[i] === alphabet[j]) {
            message += alpha[j];
          }
        }
      }
      return message;
    } else if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") message += input[i];
        for (let j = 0; j < alpha.length; j++) {
          if (input[i] === alpha[j]) {
            message += alphabet[j];
          }
        }
      }
      return message;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
