// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("polybius() tests", () => {
  it("should return a string when encoding", () => {
    expect(polybius("a")).to.be.a("string");
  });
  
  it("should make spaces throughout", () => {
    expect(polybius("a a a")).to.include(" ");
  });
  
  it("should return false if the number of characters is uneven", () => {
    expect(polybius("111", false)).to.be.false;
  });
  
  it("should ignore capital letters", () => {
    expect(polybius("HEY YOU")).to.equal("325145 454354");
    expect(polybius("325145 454354", false)).to.equal("hey you");
  });
  
  it("should ignore capital letters", () => {
    expect(polybius("Jim")).to.equal("424223");
    expect(polybius("424223", false)).to.equal("(i/j)(i/j)m");
  });
  });
