var Pangram = function(input) {
    this.pangram = input;
};

var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

Pangram.prototype.isPangram = function() {

    // make sure string has atleast 26 chars long
    if(this.pangram < 26) {
        return false;
    }

    var potentialPangram = Pangram.prototype.addToArray(this.pangram);

    if(Pangram.prototype.compareArray(potentialPangram)) {
        return true;
    } else {
        return false;
    }

};

Pangram.prototype.addToArray = function(arr) {
    var alphabetClone = {};
    for(var i = 0; i < arr.length; i++) {
        if(!(arr[i] in alphabetClone) && (arr[i].match(/[a-z]/) || arr[i].match(/[A-Z]/))) {
            alphabetClone[arr[i].toLowerCase()] = arr[i].toLowerCase();
        }
    }
    return Object.keys(alphabetClone).sort();
};

Pangram.prototype.compareArray = function(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(!(alphabet[i].charCodeAt() === arr[i].charCodeAt())) {
            return false;
        }
    }
    return true;
};

module.exports = Pangram;
