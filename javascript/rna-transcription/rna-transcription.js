// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`

var dnaTranscriber = function() {};

var rna = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
};

dnaTranscriber.prototype.toRna = function(dna) {
    var returnValue = "";

    for(var i = 0; i < dna.length; i++) {
        if(!rna.hasOwnProperty(dna[i])) {
            throw new Error('Invalid input');
        } else {
        returnValue += rna[dna[i]];
        }
    }
    return returnValue;
};

module.exports = dnaTranscriber;
