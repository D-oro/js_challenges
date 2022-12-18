//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    //get the length of the second argument
    const length = ending.length

    //split the first argument into an array
    let strArray = str.split("")

    //reverse the new array
    strArray.reverse()

    //slice the new array at the length of the second argument
    let strSliced = strArray.slice(0, length)

    //reverse and join the first argument
    let strSlicedJoined = strSliced.reverse().join("")

    //check if first and second argument have same ending
    return (strSlicedJoined == ending)
}

// IT WAS THIS EASY???! 
function solution(str, ending){
    return str.endsWith(ending);
  }

console.log(solution("banana", "na"))
