const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";


//Step 1
function encryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}



//Step 2
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

function encryptMessage(word, shift) {
    let encryptedMessage = ''

    for (let letter of word) {
        const index = alphabet.indexOf(letter.toLowerCase());
        const newIndex = (index + shift) % alphabet.length;
        encryptedMessage += alphabet[newIndex];
    }
    return console.log(encryptedMessage)
}


//Step 3
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function decryptLetter(letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase())
    const newIndex = (index - shift) % alphabet.length;
    return alphabet[newIndex];
}


//Step 4
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function decryptMessage(word, shift) {
    let decryptedMessage = ''

    for (let letter of word) {
        const index = alphabet.indexOf(letter.toLowerCase());
        const newIndex = (index - shift) % alphabet.length;
        decryptedMessage += alphabet[newIndex]
    }
    return decryptedMessage;
} 


//Question
He will get Brutus back. But only if the same shift value is chosen. Brutus will then return lower cased.
