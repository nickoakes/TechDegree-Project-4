class Phrase {
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();
}
    addPhraseToDisplay() {
        let phraseLetters = this.phrase.split('');
        phraseLetters.forEach(letter => {
            let placeholder = document.createElement('li');
            if(letter === " "){
                placeholder.className = "space";
            } else {
                placeholder.className = `hide letter ${letter}`;
                placeholder.innerHTML = `${letter}`;
            }
            document.getElementById('phrase').firstElementChild.appendChild(placeholder);
        });
    }

    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            //event.target.classList.add('chosen');
            return true;
        }
    }

    showMatchedLetter(letter) {
        let correctLetters = document.querySelectorAll(`.${letter}`);
            for(let i = 0; i < correctLetters.length; i++) {
            correctLetters[i].classList.replace('hide', 'show');
        }
    }
}

let phrase1 = new Phrase("A dime a dozen");
let phrase2 = new Phrase("Better late than never");
let phrase3 = new Phrase("Hang in there");
let phrase4 = new Phrase("It is not rocket science");
let phrase5 = new Phrase("You can say that again");