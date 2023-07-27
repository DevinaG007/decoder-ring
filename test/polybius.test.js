// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius(), my tests", () => {
    it("should return a message with letters when a numerical code is given", () => {
        const input = "12134325512434 112451 2224511144";
        const actual = polybiusModule.polybius(input, encode = false);
        const expected = "flowers are great"
        expect(actual).to.equal(expected);
    })
  it("should return a string when encoding is set to true", () => {
    const input = "hello world";
    const actual = polybiusModule.polybius(input, encode = true);
    expect(actual).to.be.a("string");
  });
  it("should return false if the inputted string has a odd length of characters, excluding spaces", () => {
    const input = "3251131343 254324134";
    const actual = polybiusModule.polybius(input, encode = false);
    expect(actual).to.be.false;
  });
  it("should maintain spaces from the inputted string when decoding", () => {
    const input = "3251131343 2543241341";
    const actual = polybiusModule.polybius(input, (encode = false));
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });
  it("should return both 'i' and 'j' when decoding the number 42", () => {
    const input = "4432423352125413";
    const actual = polybiusModule.polybius(input, encode = false);
    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });
  it("should ignore capital letters when encoding", () => {
    const input = "HelLo WorLD";
    const actual = polybiusModule.polybius(input, encode = true);
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });
  it("should return the correct coded message", () => {
    const input = "message";
    const actual = polybiusModule.polybius(input, encode = true);
    const expected = "23513434112251";
    expect(actual).to.equal(expected);
  })
});
