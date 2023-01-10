// DOM access
 
const haikuBtn  = document.getElementById('haiku-btn');
const haikuBox  = document.getElementById('haiku-box');
const lineOne = document.getElementById('line-one');
const lineTwo = document.getElementById('line-two');
const lineThree = document.getElementById('line-three');

// Object for word arrays

const haikuWords = {
    singleNoun : ['tree','leaf', 'wind', 'beach', 'lake', 'sky', 'cliff', 'sea', 'hill', 'grass', 'clouds', 'land', 'peak'],
    doubleNoun : ['flower', 'river', 'mountain', 'sunset', 'rainbow', 'forest', 'wildfire', 'valley', 'meadow', 'seaside', 'prairie'],
    doubleAdverb : ['slowly', 'quietly', 'flowing', 'wildly', 'gently', 'swiftly', 'earthy'],
    singleVerb : ['moves', 'waits', 'shifts', 'sways', 'groans', 'creaks', 'tames', 'quiets'],
    doubleVerb : ['flowing', 'drifting', 'swaying', 'growing', 'calmly', 'splendid','stunning'],
    articles : ['a', 'the'],
    connectors : ['in', 'and']
}     

/*
* Functions
*/

function num(arr) {
    return Math.floor(Math.random() * arr.length);
}

function firstLine() {
    let firstLine = haikuWords.articles[num(haikuWords.articles)] + ' ' + haikuWords.doubleNoun[num(haikuWords.doubleNoun)] + ' ' + haikuWords.singleVerb[num(haikuWords.singleVerb)];
    
    const capFirstLine = firstLine.charAt(0).toUpperCase()
    + firstLine.slice(1)
    
    return capFirstLine;
}

function secondLine() {
    let secondLine = haikuWords.singleNoun[num(haikuWords.singleNoun)] + ' ' + haikuWords.connectors[num(haikuWords.connectors)] + ' ' + haikuWords.doubleNoun[num(haikuWords.doubleNoun)] + ' ' + haikuWords.doubleAdverb[num(haikuWords.doubleAdverb)] 
    + ' ' +  haikuWords.singleVerb[num(haikuWords.singleVerb)];
    
    const capSecondLine = secondLine.charAt(0).toUpperCase()
    + secondLine.slice(1)
    
    return capSecondLine;
}

function thirdLine() {
    let thirdLine = haikuWords.doubleVerb[num(haikuWords.doubleVerb)] + ' ' + haikuWords.articles[num(haikuWords.articles)] + ' ' + haikuWords.singleNoun[num(haikuWords.singleNoun)]
    + ' ' + haikuWords.singleVerb[num(haikuWords.singleVerb)];
   
    const capThirdLine = thirdLine.charAt(0).toUpperCase()
    + thirdLine.slice(1)
    
    return capThirdLine;
}

/*
* Event Listeners
*/

haikuBtn.addEventListener('click', () => {
    lineOne.textContent = firstLine();
    lineTwo.textContent = secondLine();
    lineThree.textContent = thirdLine();
});


