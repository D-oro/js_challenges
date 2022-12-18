// Help your social media team autogenerate some hashtags!
// They just need to enter a string and your algorithm gets rid of the spaces, capitalises the string appropriately, and of course adds the #

function generateHashtag (str) {

    let hashtag = ["#"]
    let strArray = str.split(" ")

        for (let word of strArray){
            let wordArray = word.split("")
            let upper = wordArray[0].toUpperCase();
            wordArray.shift()
            let finalWord = upper + wordArray.join("")
            hashtag.push(finalWord)
        }
        result = hashtag.join("")

    return result
}


console.log(generateHashtag("this shit is bananas")) 

// #ThisShitIsBananas