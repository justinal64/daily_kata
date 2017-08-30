// Bob answers 'Sure.' if you ask him a question.
//
// He answers 'Whoa, chill out!' if you yell at him.
//
// He says 'Fine. Be that way!' if you address him without actually saying
// anything.
//
// He answers 'Whatever.' to anything else.
var Bob = function() { };

Bob.prototype.hey = function(input) {
	if(input == input.toUpperCase() && !!input.match(/[A-Z]/)) return 'Whoa, chill out!';

	if(input == '' || input.replace(/\s/g, '') == '') return 'Fine. Be that way!';

	if(input.indexOf('?') == input.length-1) return 'Sure.';

	return 'Whatever.';
};

module.exports = Bob;
