const Cipher = function(key) {
  // randomValue = () => {
  //   return Math.floor(Math.random() * 25) + 97; // random number between a - z
  // };

  this.key = "a";
  // https://stackoverflow.com/questions/17572873/how-can-i-check-if-a-string-is-all-uppercase-in-javascript
  isUpperCase = stringToCheck => {
    return /^[^A-Z]*$/.test(stringToCheck);
  };

  // checks the string to determine if all chars are the same
  compareString = stringToCompare => {
    if (isUpperCase(stringToCompare)) {
      new Error("Bad key");
    }
    for (var i = 0; i < stringToCompare.length; i++) {
      // if all the values aren't the same return false
      if (stringToCompare[i] !== stringToCompare[0]) return false;
    }
    return true;
  };

  scrambleText = charToEncode => {
    const scrambledValue = this.key.charCodeAt() + charToEncode.charCodeAt();
    if (scrambledValue > 122) return String.fromCharCode(scrambledValue - 97);
    return String.fromCharCode(scrambledValue);
  };

  this.encode = encodedString => {
    if (compareString(encodedString)) {
      return scrambleText(encodedString[0]);
    }
    // throw an error
    return encodedString;
  };

  this.decode = stringToEncode => {
    console.log(stringToEncode);
  };
};

module.exports = Cipher;
