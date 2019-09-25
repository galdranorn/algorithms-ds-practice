// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((letter, letterIndex) => {
        return letter === str[str.length - letterIndex - 1];
    });
}

module.exports = palindrome;

/*
function palindrome(str) {
    let reversed = str.split('').reverse().join('');
    return (reversed === str) ? true : false; 
    // can be write also as just 
    // return reversed===str
}
*/