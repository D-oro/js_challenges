
// random number between 0 and 9
function randomNumber(){
    return Math.floor(Math.random()*10)
 }
 console.log(randomNumber())
 
 // random number between 0 and 3
 function randomNumber(){
     return Math.floor(Math.random()*4)
  }
  console.log(randomNumber())
 
 
 // random number in range
 function getRandomInt(min, max) {
     min = Math.ceil(min); // inclusive
     max = Math.floor(max); // exclusive
     return Math.floor(Math.random() * (max - min) + min); 
   }
 
 console.log(getRandomInt( 3, 6))