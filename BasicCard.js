// Create a constructor for creating basic cards w/ front and back property
var basicCard = function(front, back) {
	this.front = front;
	this.back = back;	
};

// Define a Node module that exports a constructor for creating basic flashcards
module.exports = basicCard;