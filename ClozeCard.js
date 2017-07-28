// Create a constructor for clozeCard
var clozeCard = function(text, cloze) {
	this.cloze = cloze;
	this.text = text;
	this.partialText = text.replace(cloze, "_______________");
	// constructor should throw or log an error when the cloze deletion does not appear in the input text.
	if (this.partialText === text) throw Error ("Mer, this isn't working");
}

// Define a Node module that exports a constructor for creating clonze card
module.exports = clozeCard;
