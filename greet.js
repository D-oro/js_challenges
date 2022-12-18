// create a greet function that returns "Hello there" if no name is given, that returns "Hello _____, nice to meet you " if one name is given, and that returns "Hello ___, my name is _____" if two names are given, filling in the blanks appropriately. 


function greet(first, second){
    if(first){
        if(second){
            return `Hello ${first}, my name is ${second}`
        } else{
            return `Hello ${first}, nice to meet you`
        }
    } else{
        return `Hello there`
    }
}

console.log(greet())