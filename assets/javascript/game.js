// create an array of words
var word = ["rose","jasmine","lilly","daisy","sunflower"];
var underscoreArray = [];
var underscoreDiv = document.getElementById("underscore-div");
var winDiv = document.getElementById("win-div");
var guessremainDiv = document.getElementById("guessremain-div");
var guessedDiv = document.getElementById("guessed-div");
var rightWord = [];
var wrongWord = [];
var togetherWord = [];
var CompGuess;
var userGuess;
var win = 0;
var guess = 12;
var posArray = [];
var n =0
function myReset(){
    underscoreArray = [];
    rightWord = [];
    wrongWord = [];
    togetherWord = [];
    // choose word randomly
    userGuess = "";
    CompGuess = word[Math.floor(Math.random()*word.length)];
    console.log(CompGuess);
    // create underscore based on length of word
    function underscoreMyfunction() {
        for(var i=0;i<CompGuess.length;i++){
            underscoreArray.push("_");
        }
        return underscoreArray;
    }
    underscoreDiv.innerHTML = underscoreMyfunction().join(" ");
    guess = 12;
    guessremainDiv.innerHTML = guess;   
    
}
myReset();
document.onkeypress = function (event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //console.log("guess_before"+guess);
    guess--;
    guessremainDiv.innerHTML = guess;
    //console.log("guess_after"+guess);
    if(guess === 0){
        console.log("guess"+guess);
        myReset();
    }
    console.log(userGuess); 
    posArray = [];
    for(var j=0;j<CompGuess.length;j++){
        if(CompGuess.indexOf(userGuess,j)>-1){
            posArray[n++] = CompGuess.indexOf(userGuess,j);
        }
    }
    for(var r=0;r<posArray.length;r++){
        console.log("posArray"+posArray[r]);
    }
    // var posLetter =  CompGuess.indexOf(userGuess);
    // console.log(posLetter);
    if(CompGuess.indexOf(userGuess) > -1){
        rightWord.push(userGuess);
        for(var k=0;k<posArray.length;k++){
            underscoreArray[posArray[k]] = userGuess;
            // console.log("pos: "+posArray[k]);
            // console.log("pos: "+underscoreArray[posArray[k]]);
        }
        underscoreDiv.innerHTML = underscoreArray.join(" ");
        if(underscoreArray.join("") === CompGuess){
            //alert("you win");
            win++;
            winDiv.innerHTML = win;
            myReset();
        }
    }else {
        wrongWord.push(userGuess);
    }
    togetherWord = wrongWord.concat(rightWord);
    console.log(togetherWord.join(","));
    guessedDiv.innerHTML = togetherWord.join(",");
    
    
}
// check if user guess is right
// if right push to right array
// if wrong push to left array
