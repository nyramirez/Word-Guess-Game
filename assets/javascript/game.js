var computerWord1 = ["whizzing", "buzzcuts", "mizzling", "unpuzzle", "jujuisms"];
var computerWord2 = ["kickbox", "nuzzles", "jezebel", "palazzo", "jonquil"];
var computerWord3 = ["maximizers", "quillbacks", "razzmatazz", "equivoques", "highjacked"];
var computerWord4 = ["zouk", "jowl", "jeux", "java", "jobs"];
var computerWord5 = ["hajji", "jumpy", "quack", "quiff", "capiz"];

// Putting together array of words and creating varaible for random word
var allWords = [computerWord1, computerWord2, computerWord3, computerWord4, computerWord5];
var randomWord = allWords[Math.floor((Math.random() * 4) + 1)][Math.floor((Math.random() * 4)+1)];

// Getting the lenght for variable
var wordLength = randomWord.length;
console.log(randomWord);
console.log(randomWord.length);



if (wordLength === 4) {
    function startGameFunction() {
        document.getElementById("random-Word").textContent = "_  _  _  _";
    }
};

if (wordLength === 5) {
    function startGameFunction() {
        document.getElementById("random-Word").textContent = "_  _  _  _  _";
    }
};

if (wordLength === 7) {
    function startGameFunction() {
        document.getElementById("random-Word").textContent = "_  _  _  _  _  _  _";
    }
};

if (wordLength === 8) {
    function startGameFunction() {
        document.getElementById("random-Word").textContent = "_  _  _  _  _  _  _  _";
    }
};

if (wordLength === 10) {
    function startGameFunction() {
        document.getElementById("random-Word").textContent = "_  _  _  _  _  _  _  _  _  _";
    }
};

// function startGameFunction() {
//     document.getElementById("random-Word").textContent = randomWord;
// }
