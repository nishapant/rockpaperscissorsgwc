var selections = ['rock', 'paper', 'scissors'];
var userPath = "";
var userInput = "";
var computerMove = "";
var computerPath = "";
function generateNewMove(){
  var randIndex = Math.floor(Math.random() * 3);
  computerMove = selections[randIndex];
  if(computerMove == "rock"){
    computerPath = "gifs/rockRight.gif";
  }else if(computerMove == "paper"){
    computerPath = "gifs/paperRight.gif";
  }else if(computerMove=="scissors"){
    computerPath = "gifs/scissorsRight.gif";
  }
}

function submit(input){
  userInput = input;
  changeScreens();
  setUserInputs();
  generateNewMove();
  setImagePaths();
  findWinner();
}

function setUserInputs(){
  if(userInput == "rock"){
    userPath = "gifs/rockLeft.gif";
  }else if(userInput == "paper"){
    userPath = "gifs/paperLeft.gif";
  }else if(userInput=="scissors"){
    userPath = "gifs/scissorsLeft.gif";
  }else{
    alert("error");
  }

}
function setImagePaths(){
  document.getElementById("leftImg").src = userPath;
  document.getElementById("rightImg").src = computerPath;
}

function findWinner(){
  if(userInput == "rock"){
    if(computerMove == "rock"){
      document.getElementById("results").innerHTML = "you tied";
    }else if (computerMove == "paper") {
      document.getElementById("results").innerHTML = "you lost";
    }else if (computerMove == "scissors") {
      document.getElementById("results").innerHTML = "you won";
    }
  }else if(userInput == "paper"){
    if(computerMove == "rock"){
      document.getElementById("results").innerHTML = "you won";
    }else if (computerMove == "paper") {
      document.getElementById("results").innerHTML = "you tied";
    }else if (computerMove == "scissors") {
      document.getElementById("results").innerHTML = "you lost";
    }
  }else if(userInput == "scissors"){
    if(computerMove == "rock"){
      document.getElementById("results").innerHTML = "you lost";
    }else if (computerMove == "paper") {
      document.getElementById("results").innerHTML = "you won";
    }else if (computerMove == "scissors") {
      document.getElementById("results").innerHTML = "you tied";
    }
  }
}

function changeScreens(){
  document.getElementById("images").style.display = "none";
  document.getElementById("h1").style.marginTop = "100px";
  document.getElementById("h1").style.fontSize = "50px";
  document.getElementById("para").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("rpsGifs").style.display = "block";
  document.getElementById("rpsGifs").style.margin = "0 auto";
}
