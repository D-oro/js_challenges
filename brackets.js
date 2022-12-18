// write a function that takes a string and checks if all brackets () {} [] are closed. 


//this should return true:
let x = "hello{banana}"

//this should return false:
let y = "h(ello"


const bracketsFunc = (str) => {
    const opening = ['[', '(', '{']
    const closing  = [']', ')', '}']
    const arr = str.split('')
    const brackets = []
    
    arr.forEach(el => {
        if(opening.includes(el)){
            brackets.push(el)
        } else if(closing.includes(el)){
            const index = closing.indexOf(el)

            // how to get the last element of an array
            if(brackets[brackets.length -1] === opening[index]){
                brackets.pop()
            }
        }
    })

    // zero is a falsy value, so if the length of brackets is zero, then return false, otherwise return true.
    // return brackets.length ? false : true; 

    //another way to do this:
    return !brackets.length
}


console.log(bracketsFunc(x)) //true
console.log(bracketsFunc(y)) //false
