// Write your tests here!
const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution tests written by student", () => {
    it("should decode a message using the given alphabet", () => {
       const input = "y&ii$r&";
       const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
       const actual = substitutionModule.substitution(input, alphabet, false);
       const expected = "message";
       expect(actual).to.equal(expected); 
    });
    it("should encode a message using the given alphabet", () => {
        const input = "autumn";
        const alphabet = "$wae&zr!xtfcygvuhbijnokmpl";
        const actual = substitutionModule.substitution(input, alphabet,true);
        const expected = "$njnyg";
        expect(actual).to.equal(expected); 
    });
    it("should only take an alphabet with exactly 26 characters", () => {
        const input = "autumn";
        const alphabet = "$wae&zrdxtf!cygvuhbijnokmpl";
        const actual = substitutionModule.substitution(input, alphabet,true);
        expect(actual).to.be.false;
    });
    it("should maintain spaces throughout message and decode special characters", () => {
        const input = "autumn rain";
        const alphabet = "$wae&zr!xtfcygvuhbijnokmp.";
        const actual = substitutionModule.substitution(input, alphabet,true);
        const expected = "$njnyg b$xg";
        expect(actual).to.equal(expected); 
    });
    it("should return false if the given alphabet does not have unique characters", () => {
        const input = "autumn rain";
        const alphabet = "$wa$&zr!xtfcygvuvbijnonmp.";
        const actual = substitutionModule.substitution(input, alphabet,true);
        expect(actual).to.be.false;
    });
});