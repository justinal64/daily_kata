const Gigasecond = function (birth) {
  this.birth = birth
  this.date = function(){
    var timeInSeconds = this.birth.getTime() / 1000;

    var gigasecondDate = timeInSeconds + Math.pow(10, 9)

    return new Date(gigasecondDate * 1000)
  }
};

module.exports = Gigasecond;
