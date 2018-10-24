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
var audioDiv = document.getElementById("myAudio"); 
wordimageDiv.setAttribute("src","assets/images/nature.jpg");
var rightWord = [];
var wrongWord = [];
var togetherWord = [];
var togetherWordUpper = [];
var CompGuess;
var userGuess;
var win = 0;
var guess = 12;
var posArray = [];
var n =0
var checkReset;

// Function to play and pause audio
function playAudio() { 
    audioDiv.play(); 
} 
function pauseAudio() { 
    audioDiv.pause(); 
}  

// Reset function
function myReset(){
    underscoreArray = [];
    rightWord = [];
    wrongWord = [];
    togetherWord = [];
    togetherWordUpper = [];

    // Choose word randomly
    userGuess = "";
    CompGuess = word[Math.floor(Math.random()*word.length)];

    // Create underscore based on length of word
    console.log(CompGuess);
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

// onkeypress event
document.onkeypress = function (event) {
    check = 0;

    // Get the user guess
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Proceed only if the letter is not already guessed
    if(togetherWord.indexOf(userGuess) === -1){
    guess--;
    guessremainDiv.innerHTML = guess;
    if(guess === 0){
        myReset();
    }

    // Check if letter is present multiple times 
    // Store the position in an array
    posArray = [];
    for(var j=0;j<CompGuess.length;j++){
        if(CompGuess.indexOf(userGuess,j)>-1){
            posArray[n++] = CompGuess.indexOf(userGuess,j);
        }
    }

    // Proceed if the letter guess is present in computer guessed word
    if(CompGuess.indexOf(userGuess) > -1){
        rightWord.push(userGuess);

        // Push the letters guessed in corresponding position
        // HINT: By replacing the underscore
        for(var k=0;k<posArray.length;k++){
            underscoreArray[posArray[k]] = userGuess;
        }
        underscoreDiv.innerHTML = underscoreArray.join(" ");

        // Proceed if userguess is equal to computer guess
        if(underscoreArray.join("") === CompGuess){
            Winword = CompGuess;

            //Display the image to img-column
            indexWinword = word.indexOf(Winword);
            imageAddress = WordImage[indexWinword];
            wordimageDiv.setAttribute("src",imageAddress);

            //Display label
            labelDiv.innerHTML = Winword;
            win++;
            winDiv.innerHTML = win;
            myReset();
        }
    }else {
        wrongWord.push(userGuess);
    }

    // Display guessed letters in upper case using new array
    togetherWord = wrongWord.concat(rightWord);
    for(var m = 0; m < togetherWord.length; m++){
        togetherWordUpper[m] = togetherWord[m].toUpperCase();
    }
    
    guessedDiv.innerHTML = togetherWordUpper.join(",");
    
    if(check === 1){
        myReset();
        guessedDiv.innerHTML = "NONE";
    }
}
    
}
