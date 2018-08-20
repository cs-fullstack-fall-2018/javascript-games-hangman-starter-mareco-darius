var secretWords=[ " cat", "dog" , "cactus", "building" , "papaya","cup", "weld", "light", "rope","chipotle"];
//var playerInput = prompt("Enter a Letter ! Save a Life !");
function newGame() {
    var randomWord = secretWords[Math.floor(Math.random() * secretWords.length)];
    console.log(randomWord);
    var maskedWord = "";
    for ( i =0 ; i< randomWord.length; i++){
    maskedWord = "*";
    console.log(maskedWord) ;
    }


   // document.getElementById(" GuessedWOrd")


    }

    newGame();


//function guessAletter() {
  //  v

