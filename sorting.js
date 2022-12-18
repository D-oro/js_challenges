// Sorting numbers ascending
function sortingNumbers(input) {
    return input.sort(function(a, b){return a-b});
}
console.log(sortingNumbers([3, 15, 8, 7, 5]))


// Sorting numbers descending
function reversingNumbers(input) {
    return input.sort(function(a, b){return b-a});
}
console.log(reversingNumbers([3, 15, 8, 7, 5]))


// Sorting strings alphabetically
function sortingWords(input){
    return input.sort();
}
console.log(sortingWords(["Banana", "Apple", "Cucumber"]))

// sorting strings reverse alphabetically
function reversingWords(input){
    return input.reverse();
}
console.log(reversingWords(["Banana", "Apple", "Cucumber"]))