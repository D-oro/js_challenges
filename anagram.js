// check if two strings, x and y, are anagrams

const anagramChecker = (x, y) => {
    if (x.length !== y.length){
        return false
    } else {
        let xArray = x.toLowerCase().split("").sort()
        let yArray = y.toLowerCase().split("").sort()

        let xJoined = xArray.join("")
        let yJoined = yArray.join("")

        if (xJoined == yJoined){
            return true
        } else {
            return false
        }
    }
}

console.log(anagramChecker("heart", "earth"))