// // Write your tests here!
// const { expect } = require("chai").expect;
// const { substitution } = require("../src/substitution").substitution;

// describe("Input Check", () => {
//   it("Should return false if given substitution alphabet is not exactly 26 characters", () => {
//     const input1 = "iji";
//     const input2 = "xoyqmcgrukswaflnthdjpzib"; //24 chars instead of 26
//     const input3 = true;
//     const expected = false
//     const actual = substitution(input1, input2, input3);
//     expect(actual).to.equal(expected);
//   })
  
//   it("Should return false if any characters are duplicated in the substitution alphabet", () => {
//     const input1 = "aAaA";
//     const input2 = "xoyqmcgrukswaflnthdjpzvvv"; 
//     const input3 = true;
//     const expected = false
//     const actual = substitution(input1, input2, input3);
//     expect(actual).to.equal(expected);
//   });
// })

// describe("Encoding/Decoding Check", () => {
//   it("Should maintain spaces when encoding", () => {
//     const input1 = "you are sn excellent spy";
//     const input2 = "xoyqmcgrukswaflnthdjpzibev"; //24 chars instead of 26
//     const input3 = true;
//     const expected = 'elp xhm xf mbymwwmfj dne';
//     const actual = substitution(input1, input2, input3);
//     expect(actual).to.equal(expected);
//   });
  
//   it("Should ignore capital letters", () => {
//     const input1 = "YoU aRe An ExCeLlEnT sPy";
//     const input2 = "xoyqmcgrukswaflnthdjpzvvv"; 
//     const input3 = true;
//     const expected = 'elp xhm xf mbymwwmfj dne';
//     const actual = substitution(input1, input2, input3);
//     expect(actual).to.equal(expected);
//   });
  
//   it("Should properly translate message with givem substitution alphabet", () => {
//     const input1 = "jrufscpw";
//     const input2 = "xoyqmcgrukswaflnthdjpzvvv"; 
//     const input3 = false;
//     const expected = 'thinkful';
//     const actual = substitution(input1, input2, input3);
//     expect(actual).to.equal(expected);
//   });
// });

const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;
const substitution = substitutionModule.substitution;
describe("subsititution false cases", () => {
  it("Should be false if the given alphabet is not exactly 26 characters long", () => {
    const expected = false;
    const actual = substitution("thinkful", "short");
    expect(actual).to.equal(expected);
  });
  it("Should be false if there are any duplicate characters in the given alphabet", () => {
    const expected = false;
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(expected);
  });
})
describe("subsititution encoding and decoding", () => {
  it("correctly translates the given phrase, based on the alphabet given to the function", () => {
    const expected = 'jrufscpw';
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  it("It maintains spaces in the message, before and after encoding or decoding", () => {
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  it("Should be false if there are any duplicate characters in the given alphabet", () => {
    const expected = "y&ii$r&";
    const actual = substitution("Message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  });
})