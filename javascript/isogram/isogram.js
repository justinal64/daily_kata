const Isogram = function (input) {
  this.isIsogram = () => {
      var isogram = "";
      for(var i = 0; i < input.length; i++) {
          if(isogram.includes(input[i]))
              return false;
          else if(input[i].match(/^[a-zA-Z\u00C0-\u00ff]/))
              isogram += input[i].toLowerCase();
      }
      return true;
  };
};

module.exports = Isogram;
