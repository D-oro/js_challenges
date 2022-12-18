// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

function XO(string){
    const upperString = string.toUpperCase();
    let X = 0
    let O = 0

    function countXAndO(input){
        if (input === "X"){
            ++X
        }
        else if (input === "O"){
            ++O
        }
    }

    for (let letter of upperString){
        countXAndO(letter)
    }
    return X === O
}

console.log(XO("ooxx")) //true
console.log(XO("ooXx")) //true
console.log(XO("ooMXx"))  //true
console.log(XO("TOoOMXx")) //false 
console.log(XO("yYO")) //false
console.log(XO("yYUHjs")) //true