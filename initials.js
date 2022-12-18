// turn a first and a last name into initials
// e.g. Doro Hinrichs -> D.H.

function abbrevName(name){
    let arr = name.toUpperCase().split(" ")
    let first = arr[0].toString().slice(0,1)
    let last = arr[1].toString().slice(0,1)
    console.log(first + "." + last + ".")
  }

abbrevName("Doro Hinrichs")