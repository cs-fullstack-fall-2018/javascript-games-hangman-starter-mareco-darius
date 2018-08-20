
var secretWords=[ " cat", "dog" , "cactus", "building" , "papaya","cup", "weld", "light", "rope","chipotle"];;
var playerInput = prompt("Enter a Letter ! Save a Life !");
function guessALetter() {
    var randomWord = secretWords[Math.floor(Math.random() * secretWords.length)];
    console.log(randomWord);

    var newArray = new Array(randomWord)
    var strike = 0

    for ( var x = 0; x<newArray.length;i++){
        newArray[x]= "__"
    }



    //if (playerInput == str.innerText(randomWord))
   // {
     //   console.log(str.innerText(randomWord))
   // }



}



var alphabet = [" A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","w","X","Y","Z"]

var strike = 0 ;

guessALetter();