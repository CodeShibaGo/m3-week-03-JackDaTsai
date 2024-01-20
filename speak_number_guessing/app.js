// get a random number 
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number : ", randomNumber);

// set up speech recognition
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// create a new instance
let recognition = new window.SpeechRecognition();
// language
// recognition.lang = "en-US";
recognition.lang = "zh-TW";

// start recognition
recognition.start();

// speak result
recognition.addEventListener("result", onSpeak);

// speak again
recognition.addEventListener("end", () => recognition.start());

function onSpeak(e) {
    const guessNumber = e.results[0][0].transcript;
    displayResult(guessNumber);
}

function displayResult(guessNumber) {
    const hint = checkIsValidNumber(guessNumber) ? (parseInt(guessNumber) > randomNumber ? "Lower" : "Higher") : "Not a valid number";

    if (parseInt(guessNumber) === randomNumber) {
        $("#msg").html(`
            <h2>Congrats! You have guessed the number! <br><br>
            It was ${guessNumber}</h2>
            <button class="play-again" id="play-again">Play Again</button>
        `);

        
    } else {
        $("#msg").html(`
            <h2>Go ${hint}</h2>
            <small>Number of guesses: ${guessNumber}</small>
        `);    
    }
}

function checkIsValidNumber(guessNumber) {
    if (!isFinite(guessNumber) || parseInt(guessNumber) > 100 || parseInt(guessNumber) < 1) {
        return false;
    }
    return true;
}

$("body").click(function(e) {
    if (e.target.id === "play-again") {
        window.location.reload();
    }
});