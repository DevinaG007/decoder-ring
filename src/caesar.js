// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const message = input.toLowerCase();
    let newMessage; 
    let newLetter = [];
     if (!shift || shift == undefined) return false;
     if (shift === 0 || shift > 25 || shift < -25) return false;
     for (let i = 0; i < message.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        let letter = "";
         if (alphabet[j] == message[i]) {
         //let newLetter;
          letter = (alphabet[j + shift])
         newMessage = message.replace(message[i], letter);
        }
      }
    }
    return newMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
