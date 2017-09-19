const Cipher = function(key) {
  randomValue = () => {
    return Math.floor(Math.random() * 25) + 97; // random number between a - z
  };

  this.key = () => {
    // return a random letter between a - z
    console.log(randomValue());
    console.log("key working");
  };
  this.encode = () => {
    console.log(randomValue());
    console.log("encode working");
  };
};

module.exports = Cipher;
