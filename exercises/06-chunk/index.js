// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunked = [];
    let chunks = Math.ceil(array.length/size);
    for (let i=0; i<chunks; i++) {
        chunked.push(array.slice(i*size, i*size+size))
    }
    return chunked;
}

module.exports = chunk;

/*function chunk(array, size) {
    let finalArray = [[]];

    let chunkCounter = 0;
    let chunkIndex = 0;

    for (let i=0; i<array.length; i++) {
        if (chunkCounter === size) {
            chunkCounter = 0;
            finalArray.push([]);
            chunkIndex++;
        }
        finalArray[chunkIndex].push(array[i]);
        chunkCounter++;
    }
    return finalArray;
}*/
