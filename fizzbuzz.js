//return "Fizz" if the number can be divided by 5, "Buzz" if it can be divided by 3, and "FizzBuzz" if it can be divided bz both 3 and 5.

const FizzBuzz = (number) =>{
    if (number % 15 == 0){
      return "FizzBuzz"
    } else if (number % 5 == 0){
      return "Fizz"
    } else if (number % 3 == 0){
      return "Buzz"
    }
  }
  
  console.log(FizzBuzz(3))