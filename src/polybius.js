// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusKey = require("../data/polybius-key");
  function polybius(input, encode = true) {
    if (encode) {
      let message = input.toLowerCase();
      for (let i = 0; i < message.length; i++) {
        polybiusKey.filter((alpha) => {
          if (alpha.letter.includes(message[i])) {
            message = message.replace(message[i], alpha.number);
          }
        });
      }

      return message;
    }
    if (!encode) {
      if (input.replace(/ +/g, "").length % 2 !== 0) return false;
      let message = input.replace(/ +/g, "");
      let pair = [];
      for (let i = 0; i < message.length; i++) {
        pair.push(message[i] + message[(i += 1)]);
      }
      for (let i = 0; i < pair.length; i++) {
        polybiusKey.forEach((alpha) => {
          if (pair[i] == alpha.number) {
            input = input.replace(pair[i], alpha.letter);
          }
        });
      }
      return input;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
