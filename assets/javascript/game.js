function startGameFunction() {


    // Creating Arrays for word bank
    var computerWord1 = ["able", "boat", "bone", "jugs", "maze"];
    var computerWord2 = ["expo", "aqua", "jins", "exam", "back"];
    var computerWord3 = ["pump", "quad", "mock", "quid", "puck"];
    var computerWord4 = ["zouk", "jowl", "jeux", "java", "jobs"];
    var computerWord5 = ["high", "kick", "crux", "camp", "pomp"];

    // Putting together array of words and creating varaible for random word
    var allWords = [computerWord1, computerWord2, computerWord3, computerWord4, computerWord5];

    // Calculating Random Word
    var randomWord = allWords[Math.floor((Math.random() * 4) + 1)][Math.floor((Math.random() * 4) + 1)];

    // Getting the lenght for variable
    var wordLength = randomWord.length;
    console.log(randomWord);
    // console.log(randomWord.length);


    if (wordLength === 4) {
        var fourLetter = [" _ ", " _ ", " _ ", " _ "];
        document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + fourLetter[2] + fourLetter[3];

        // Changing lines for key pushed by user
        var userText = document.getElementById("user-text");
        document.onkeyup = function (event) {
            userText.textContent = event.key;
            // Checking what variable to use to compare to index in random word
            // console.log(userText.textContent);
            playk = userText.textContent;
            // console.log(playk);
            // console.log(randomWord[0]);
            // console.log(randomWord[1]);
            // console.log(randomWord[2]);
            // console.log(randomWord[3]);

            if (randomWord.includes(playk,3)) {    
                document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + fourLetter[2] + randomWord[3];
            }

            if (randomWord.includes(playk,2)) {

                if (randomWord.includes(playk,3)) {    
                    document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + fourLetter[2] + randomWord[3];
                }

                else {
                    document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + randomWord[2] + randomWord[3];
                };
            };

            if (randomWord.includes(playk,1)) {
                if (randomWord.includes(playk,3)) {    
                    document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + fourLetter[2] + randomWord[3];
                }
    
                else if (randomWord.includes(playk,2)) {
                    if (randomWord[2] === playk) {
                        document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + randomWord[2] + randomWord[3];
                    }

                    else {
                    document.getElementById("random-Word").textContent = fourLetter[0] + randomWord[1] + randomWord[2] + randomWord[3];
                    };
                };
            };

            if (randomWord.includes(playk,0)) {
                if (randomWord.includes(playk,3)) {    
                    document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + fourLetter[2] + randomWord[3];
                }
    
                else if (randomWord.includes(playk,2)) {
                    if (randomWord.includes(playk,3)) {    
                        document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + fourLetter[2] + randomWord[3];
                    }
                    else {
                        document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + randomWord[2] + randomWord[3];
                    };
                }
    
                else if (randomWord.includes(playk,1)) {
                    if (randomWord.includes(playk,3)) {    
                        document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + fourLetter[2] + randomWord[3];
                    }
        
                    else if (randomWord.includes(playk,2)) {
                        if (randomWord[2] === playk) {
                            document.getElementById("random-Word").textContent = fourLetter[0] + fourLetter[1] + randomWord[2] + randomWord[3];
                        }
    
                        else {
                        document.getElementById("random-Word").textContent = fourLetter[0] + randomWord[1] + randomWord[2] + randomWord[3];
                        };
                    };
                }

                else {
                    document.getElementById("random-Word").textContent = randomWord[0] + randomWord[1] + randomWord[2] + randomWord[3];
                }
                
            };

        };
    };

};