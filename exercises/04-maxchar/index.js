// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}
    for (let char of str) { // let ... of ... - for arrays and strings
        (!charMap[char]) ? charMap[char] = 1 : charMap[char]++
    }

    let max = ['', 0];
    for (let elem in charMap) { // let ... in ... - for objects
        (charMap[elem] > max[1]) ? max = [elem, charMap[elem]] : max 
    }
    return max[0];

}

module.exports = maxChar;
