// you're given a list of integers. the list contains either only even numbers, or odd numbers, except for one outlier who has snuck into the list. find it and return it.

let x = [2,4,6,3]
let y = [3,5,7,2]

function findOutlier(integers){
    let even = integers.filter(number => number % 2 == 0)
    let odd = integers.filter(number => number % 2 !== 0)

    if (even.length < odd.length){
      return even[0]
    } else if (odd.length < even.length){
      return odd[0]
    }
  }

  console.log(findOutlier(x)) //prints 3
  console.log(findOutlier(y)) //prints 2
