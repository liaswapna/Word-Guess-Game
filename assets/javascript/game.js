// create an array of words
var word = ["rose","jasmine","lilly","daisy","sunflower","tulip","daffodil","aster","allium"];
var WordImage = ["assets/images/rose.jpg",
                "assets/images/jasmine.jpg",
                "assets/images/lilly.jpg",   
                "assets/images/daisy.jpg",
                "assets/images/sunflower.jpg",
                "assets/images/tulip.jpg",
                "assets/images/daffodil.jpg",
                "assets/images/aster.jpg",
                "assets/images/allium.jpg"
                ];
var underscoreArray = [];
var labelDiv = document.getElementById("label-div");
var wordimageDiv = document.getElementById("word-image");
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
var checkReset;
function myReset(){
    underscoreArray = [];
    rightWord = [];
    wrongWord = [];
    togetherWord = [];
    // choose word randomly
    userGuess = "";
    CompGuess = word[Math.floor(Math.random()*word.length)];
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
    check = 1;
}
myReset();
document.onkeypress = function (event) {
    check = 0;
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if(togetherWord.indexOf(userGuess) === -1){
    guess--;
    guessremainDiv.innerHTML = guess;
    if(guess === 0){
        myReset();
    }
    posArray = [];
    for(var j=0;j<CompGuess.length;j++){
        if(CompGuess.indexOf(userGuess,j)>-1){
            posArray[n++] = CompGuess.indexOf(userGuess,j);
        }
    }
    if(CompGuess.indexOf(userGuess) > -1){
        rightWord.push(userGuess);
        for(var k=0;k<posArray.length;k++){
            underscoreArray[posArray[k]] = userGuess;
        }
        underscoreDiv.innerHTML = underscoreArray.join(" ");
        if(underscoreArray.join("") === CompGuess){
            //get the value to Winword
            Winword = CompGuess;
            //get the index value from word array to indexWinword
            indexWinword = word.indexOf(Winword);
            //use the indexWinword to get image address from image array
            imageAddress = WordImage[indexWinword];
            console.log(imageAddress);
            //set attributes : display the image to img-column
            wordimageDiv.setAttribute("src",imageAddress);
            //display label
            labelDiv.innerHTML = Winword;
            win++;
            winDiv.innerHTML = win;
            myReset();
        }
    }else {
        wrongWord.push(userGuess);
    }
    togetherWord = wrongWord.concat(rightWord);
    guessedDiv.innerHTML = togetherWord.join(",");
    if(check === 1){
        myReset();
        guessedDiv.innerHTML = "NONE";
    }
}
    
}
