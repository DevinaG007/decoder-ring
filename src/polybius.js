// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusKey = [
    { number: 11, letter: "a" },
    { number: 21, letter: "b" },
    { number: 31, letter: "c" },
    { number: 41, letter: "d" },
    { number: 51, letter: "e" },
    { number: 12, letter: "f" },
    { number: 22, letter: "g" },
    { number: 32, letter: "h" },
    { number: 42, letter: ["i", "j"] },
    { number: 52, letter: "k" },
    { number: 13, letter: "l" },
    { number: 23, letter: "m" },
    { number: 33, letter: "n" },
    { number: 43, letter: "o" },
    { number: 53, letter: "p" },
    { number: 14, letter: "q" },
    { number: 24, letter: "r" },
    { number: 34, letter: "s" },
    { number: 44, letter: "t" },
    { number: 54, letter: "u" },
    { number: 15, letter: "v" },
    { number: 25, letter: "w" },
    { number: 35, letter: "x" },
    { number: 45, letter: "y" },
    { number: 55, letter: "x" },
  ];
 // const polybiusKey = require("../data/polybius-key");
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
