/*
    Word Guessing Game
    Phrase.js
*/

//Phrase constructor class

class Phrase {
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();
}

//add randomly selected phrase to display

    addPhraseToDisplay() {

//split phrase string into array of characters

        let phraseLetters = this.phrase.split('');
        phraseLetters.forEach(letter => {

//create placeholder for each non-space character

            let placeholder = document.createElement('li');
            if(letter === " "){
                placeholder.className = "space";
            } else {
                placeholder.className = `hide letter ${letter}`;
                placeholder.innerHTML = `${letter}`;
            }
            document.getElementById('phrase').firstElementChild.appendChild(placeholder);
        });

//insert line breaks to prevent words from confusingly overflowing onto a new line

        const spacesArray = document.querySelectorAll('.section > ul > li.space');
        if(spacesArray.length >= 3 && spacesArray.length < 7) {
            document.querySelectorAll('.section > ul > li.space')[2].after(document.createElement('br'));
        } else if(spacesArray.length >= 7) {
            document.querySelectorAll('.section > ul > li.space')[2].after(document.createElement('br'));
            document.querySelectorAll('.section > ul > li.space')[4].after(document.createElement('br'));
            document.querySelectorAll('.section > ul > li.space')[6].after(document.createElement('br'));
        }
    }

//check whether phrase contains the letter selected by the user

    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true;
        }
    }

//reveal correctly selected letter

    showMatchedLetter(letter) {
        let correctLetters = document.querySelectorAll(`.${letter}`);
            for(let i = 0; i < correctLetters.length; i++) {
            correctLetters[i].classList.replace('hide', 'show');
        }
    }
}

//store phrases in an array

const phraseArray = [
    "A dime a dozen",
    "Better late than never",
    "Hang in there",
    "It is not rocket science",
    "You can say that again"
]

//create dynamically-named variables to hold phrases and store them in a new array

const phraseStrings = [];

for(let i = 0; i < phraseArray.length; i++) {
    phraseStrings.push(window['phrase' + i] = new Phrase(phraseArray[i]));
}