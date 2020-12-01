
var readLineSync = require("readline-sync");
const chalk = require("chalk");
const error = chalk.bold.red;
const correct = chalk.bold.green;
const marks = chalk.bold.yellow;
const comment = chalk.italic.bold.magenta;

console.log(chalk.bold.black.bgCyan("          ***** Spelling Buzzy Bee *****         "));
console.log(" ");

var player = readLineSync.question("Hey Bee! What's your name? - ");
console.log(" ");
console.log(comment("Dear " + player + " Bee, Welcome to the Buzzy Bee's Spelling Hive :) "));
console.log(" ");
console.log(comment("Help Buzzy bee move up the hive with the right spellings!"));
console.log(" ");

//Questions

var questionOne = {
  option1: "accomodate",
  option2: "acommodate",
  option3: "accommodate",
  option4: "acomodate",
  answer: 2
}

var questionTwo = {
  option1: "acheive",
  option2: "achieve",
  option3: "acheev",
  option4: "achiev",
  answer: 1
}

var questionThree = {
  option1: "buisness",
  option2: "business",
  option3: "bussiness",
  option4: "busines",
  answer: 1
}

var questionFour = {
  option1: "collegue",
  option2: "coleeg",
  option3: "collegge",
  option4: "colleague",
  answer: 3
}

var questionFive = {
  option1: "definitely",
  option2: "definately",
  option3: "defanitely",
  option4: "defenitely",
  answer: 0
}

var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var score;

quiz();

function quiz() {

  score = 0;

  for (var i = 0; i < questionArray.length; i++) {

    var userAnswer = readLineSync.keyInSelect([questionArray[i].option1,questionArray[i].option2,questionArray[i].option3,questionArray[i].option4],"Choose the right spelling : ");

    console.log(" ");

    if (userAnswer == questionArray[i].answer) {
      score++;
      console.log(correct("Yaayy! Buzzy be is " + (questionArray.length - score) + " hives closer to the Honey"));
      console.log(" ");
      console.log(marks("Your score is " + score));
      console.log(" ");
      var star = '';
      for(var i=0;i<score;i++) {
        star = star+"*"; 
      }
      console.log(comment(star));
    } else {
      console.log(error("Wrong anser!"));
      console.log(" ");
      console.log(marks("Your score is " + score));
    }
    console.log(" ");
  }


  if (score == questionArray.length) {
    console.log("Buzzy Bee says thanks. He reached the honey!")
  } else {
    console.log("Snap! you were " + (questionArray.length - score) + " hives closer to the Honey");
    console.log(" ");
    if (readLineSync.keyInYN("Do you want to try again?")) {
      quiz();
    } else {
      console.log(" ");
      if (readLineSync.keyInYN(player+", Do you want to see the right answers to all the questions?")) {
        console.log(" ");
        console.log(marks("accommodate"));
        console.log(marks("achieve"));
        console.log(marks("business"));
        console.log(marks("colleague"));
        console.log(marks("definitely"));
      }
      console.log(" ");
      console.log(player+", Thank you for playing");
    }
  }
}