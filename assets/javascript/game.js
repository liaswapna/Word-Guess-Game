// create an array of words
var word = ["rose","jasmine","lilly","daisy","sunflower"];
var underscoreArray = [];
var underscoreDiv = document.getElementById("underscore-div");
var winDiv = document.getElementById("win-div");
var guessremainDiv = document.getElementById("guessremain-div");
var rightWord = [];
var wrongWord = [];
var win = 0;
var guess = 12;
// choose word randomly
var CompGuess = word[Math.floor(Math.random()*word.length)];
console.log(CompGuess);
// create underscore based on length of word
function underscoreMyfunction() {
    for(var i=0;i<CompGuess.length;i++){
        underscoreArray.push("_");
        //underscoreDiv[0].innerHTML = underscoreArray.join(" ");
    }
    return underscoreArray;
}
underscoreDiv.innerHTML = underscoreMyfunction().join(" ");
guessremainDiv.innerHTML = guess;
// var underscoreDiv = document.getElementById("underscore-div");
// underscoreDiv.innerHTML = underscoreMyfunction().join(" ");
// get usersguess
document.onkeyup = function (event) {
    guessremainDiv.innerHTML = guess--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);   
    if(CompGuess.indexOf(userGuess) > -1){
        rightWord.push(userGuess);
        underscoreArray[CompGuess.indexOf(userGuess)] = userGuess;
        var str = "Ana has apples!";
// var pos1 = str.indexOf(" ");           // 3
// var pos2 = str.indexOf(" ", pos1 + 1); // 7
// console.log(pos2 - pos1 - 1);          // 3... the result you were expecting
        console.log(underscoreArray);
        underscoreDiv.innerHTML = underscoreArray.join(" ");
        if(underscoreArray.join("") === CompGuess){
            alert("you win");
            win++;
            //winDiv.textContent(win);
            winDiv.innerHTML = win;
        }
    }
    
    
}
// check if user guess is right
// if right push to right array
// if wrong push to left array
