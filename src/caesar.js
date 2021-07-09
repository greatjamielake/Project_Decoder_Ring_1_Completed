// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/* The Caesar Shift is a type of substitution cipher originally used by Julius Caesar 
to protect messages of military significance. It relies on taking the alphabet and "shifting" 
letters to the right or left, based on the typical alphabetic order. */



// const caesarModule = (function () {
//   // you can add any code you want within this function scope
//   const lowerBoundary = "a" 
//   const upperBoundary = "z" 

//   function caesar(input, shift, encode = true) {
//     if (!shift || shift === 0 || shift < - 25 || shift > 25)return false
//    const lowerCase = input.toLowerCase();
//    let csr = shift
//    let shifted = [];
//    if (!encode) shift *= -1;
   
//    for (let char of lwrCase) {
//      const code = char.charCodeAt() + csr ;
//      const subt = upperBoundary.charCodeAt() + (code - lowerBoundary.charCodeAt() - 1);
//      const add = lowerBoundary.charCodeAt() - (upperBoundary.charCodeAt() - code - 1);
//      const space = char.charCodeAt(0);
//      if (char === " " || char === "," || char === "!" ||  char === "?") {
//        shift += String.fromCharCode(space);
//      }else if (code > upperBoundary.charCodeAt()) {
//        shifted += String.fromCharCode(subt);
//      }else if (code < lowerBoundary.charCodeAt()) {
//       shifted += String.fromCharCode(add);
//    }else{
//      shifted += String.fromCharCode(code);
//    }
//   }
//   return shifted;
// }
   
   
   
   // create accumulator
    // let accumulator = "";
    //loop through the string
    
    
    // for (let i = 0; i < input.length; i++){
    //   const char = input[i]
    //   const isALetter = alphabet.includes(char);
    //   // if char is not a letter, add to acc
    //   if (isALetter === false){
    //     accumulator += char;
    //   }else{
    //   //else, rotate + or -, add to accumulator
    //   const charIndex =
    //   alphabet.findIndex((c) => c ===char)
    //   // A => 0
    //   // Z => 25
    //   accumulator += [alphabet[charIndex + 3] || alphabet[charIndex - 3];
    //   }
    // }
    // return accumuloator
  // }

  const caesarModule = (function () {
    // ================================ CAESAR SHIFT DATA SET ======================================
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); // creates array of characters for normal alphabet
    // ================================ HELPER FUNCTION: CHARACTER SHIFTER ======================================
    function _charShifter(char, shift) {
      if (!alphabet.includes(char)) return char;
      let newIndex = (((alphabet.indexOf(char) + shift) % 26) + 26) % 26; // ensures the new index is between 0 & 25
      return alphabet[newIndex];
    }
    // ================================ PRIMARY FUNCTION ======================================
    function caesar(input, shift, encode = true) {
      if (!shift || shift >= 26 || shift == 0 || shift <= -26) return false;
      let endMessage = "";
      if (!encode) shift *= -1;
      for (let char of input)
        endMessage += _charShifter(char.toLowerCase(), shift);
      return endMessage;
    }
    return {
      caesar,
    };
  })();
  module.exports = { caesar: caesarModule.caesar };