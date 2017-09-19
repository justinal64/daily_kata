const Cipher = function(key) {
  randomValue = () => {
    return Math.floor(Math.random() * 25) + 97; // random number between a - z
  };

  this.key = "a";

  // checks the string to determine if all chars are the same
  compareString = stringToCompare => {
    for (var i = 0; i < stringToCompare.length; i++) {
      if (stringToCompare[i] !== stringToCompare[0]) return false;
    }
    return true;
  };

  scrambleText = charToEncode => {
    var scrambledValue = this.key.charCodeAt() + charToEncode.charCodeAt();
    if (scrambledValue > 122) return scrambledValue - 97;
    return scrambledValue;
  };

  this.encode = encodedString => {
    if (compareString(encodedString)) {
      var scrambledValue = scrambleText(encodedString[0]);
      return String.fromCharCode(scrambledValue);
    }
    return "b";
  };
};

module.exports = Cipher;
