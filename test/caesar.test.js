// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

describe("caesarModule", () => {
    it("should return false if the shift value is not present", () => {
        const input = "ofoiae";
        const encode = true;
        const shift = undefined;
        const actual = caesarModule.caesar(input, shift, encode);
        expect(actual).to.be.false;
    });
    it("should return false if the shift value is equal to 0", () => {
        const input = "ofoiae";
        const encode = true;
        const shift = 0;
        const actual = caesarModule.caesar(input, shift, encode);
        expect(actual).to.be.false;
    });
    it("should return false if the shift value is greater than 25", () => {
        const input = "ofoiae";
        const encode = true;
        const shift = 27;
        const actual = caesarModule.caesar(input, shift, encode);
        expect(actual).to.be.false;
    });
    it("should return false if the shift value is less than -25", () => {
        const input = "ofoiae";
        const encode = true;
        const shift = -30;
        const actual = caesarModule.caesar(input, shift, encode);
        expect(actual).to.be.false;
    });
    it("should ignore capital letters", () => {
        const input = "KhOor";
        const encode = true;
        const shift = -3;
        const expected = "hello"
        const actual = caesarModule.caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message after encoding or decoding", () => {
        const input = "Khoor vkhuh";
        const encode = true;
        const shift = -3;
        const expected = "hello there"
        const actual = caesarModule.caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the end of the alphabet", () => {
        const input = "gdccoh";
        const encode = true;
        const shift = -3;
        const expected = "hello"
        const actual = caesarModule.caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
});