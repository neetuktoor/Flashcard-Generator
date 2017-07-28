// Requiring our basic card constructor, and the inquirer package for prompts
var basicCard = require("./basicCard");

var clozeCard = require("./clozeCard");

var inquirer = require("inquirer");

// intialize variables
var currentQ = 0;

var correctAnswer = 0;

var wrongAnswer = 0;

// test the basic card
// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
// console.log(firstPresident.front);
// console.log(firstPresident.back); 
// console.log('---------------------------------');

// test the cloze card
// var firstPresident = new clozeCard("George Washington was the first president of the United States.", "George Washington");
// console.log(firstPresident.text);
// console.log(firstPresident.cloze); 
// console.log(firstPresident.partialText); 
// console.log("---------------------------------"");

// remove the partial text from fulltext
var questions = [
  {
    fullText: "The original title of Fahrenheit 451 was The Fireman.",
    cloze: "The Fire"
  },{
    fullText: "Bradbury also wrote the 1956 screenplay for Moby Dick.",
    cloze: "Moby Dick"
  },{
    fullText: "Don Quixote is the best-selling novel of all time, with over 500 million copies sold.",
    cloze: "Don Quixote"
  },{
    fullText: "Edgar Allan Poe originally wanted a parrot to repeat the word nevermore.",
    cloze: "parrot"
  },{
    fullText: "Phidias is credited as the designer of the many statues which decorated the Parthenon",
    cloze: "Phidias"
  },{
    fullText: "Michelangelo was struck in the face with a mallet by an envious rival, disfiguring him for life",
    cloze: "Michelangelo"
  },{
    fullText: "Yoko Ono was associated with the Fluxus Movement in the 1960s.",
    cloze: "Fluxus"
  },{
    fullText: "Jeff Koons sold a balloon dog for $58.4 million.",
    cloze: "Jeff Koons"
  }
]

//create a variable to hold list of cloze questions
var clozeQuestions = [];

//create a for loop
for (var i = 0; i < questions.length; i++) {
  var j = new clozeCard(questions[i].fullText, questions[i].cloze);
  clozeQuestions.push(j);
  console.log(clozeQuestions[i]);
};

//create a function to allow user to pick category through inquirer
function litArtQuiz(){
  inquirer.prompt([
    {
      type:"input",
      name:"userName",
      message: "What is your name?",
    },
    {
      type:"confirm",
      message:"Do you want to take a quiz?",
      name:"confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.userName);
      console.log("You are ready for the Literature & Arts Quiz!\n");
      // createLitArtCards();

    }
    else {
      console.log("\nThat's okay " + inquirerResponse.userName + ", come again when you are more sure.\n");
    }
  });
}


  


