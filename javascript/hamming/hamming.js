var Hamming = function() {};

Hamming.prototype.compute = function(control, compare) {
    var different = 0;

    if(control.length !== compare.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    for(var i = 0; i < control.length; i++){
        if(control[i] !== compare[i]){
            different++;
        }
    }
    return different;
};

module.exports = Hamming;
