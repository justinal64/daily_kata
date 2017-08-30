const BeerSong = function() {
  this.verse = numOfBottles => {
    console.log("numOfBottles = ", numOfBottles);
    var bottlesLeft = "";
    if (numOfBottles === 0) {
      bottlesLeft += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
    } else if (numOfBottles === 1) {
      bottlesLeft += `${numOfBottles} bottle of beer on the wall, ${numOfBottles} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
    } else if (numOfBottles === 2) {
      bottlesLeft += `${numOfBottles} bottles of beer on the wall, ${numOfBottles} bottles of beer.\nTake one down and pass it around, ${numOfBottles -
        1} bottle of beer on the wall.\n`;
    } else {
      bottlesLeft += `${numOfBottles} bottles of beer on the wall, ${numOfBottles} bottles of beer.\nTake one down and pass it around, ${numOfBottles -
        1} bottles of beer on the wall.\n`;
    }

    console.log(bottlesLeft);
    return bottlesLeft;
  };

  this.sing = (start, finish) => {
    var song = "";
    if (finish === null) {
      finish = 0;
      console.log("finish is null");
    }
    for (var i = start; i >= finish; i--) {
      if (i === finish) {
        song += `${this.verse(i)}\n\n`;
      } else {
        song += `${this.verse(i)}\n`;
      }
      console.log(`${i} = ${song}`);
    }
    return song;
  };
};

module.exports = BeerSong;

// '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n'
