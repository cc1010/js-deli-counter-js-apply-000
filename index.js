<<<<<<< HEAD
var katzDeliLine = []


function takeANumber (katzDeliLine, currentName) {
  katzDeliLine.push(currentName);
=======
var katzDeliLine = ["Ada", ]


// function takeANumber (katzDeliLine, currentName) {
// >>>>>>> 451328479a775e03a5ad3b41d5c69fec652b8641
//   return `Welcome, ${currentName}. You are number ${katzDeliLine.length} in line.`
// }
function takeANumber(katzDeliLine) {
  if (k)
  const currentNumber = katzDeliLine.length
  return katzDeliLine.push(currentNumber + 1)
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    const removedName = katzDeliLine[0]
    katzDeliLine.shift()
<<<<<<< HEAD
    return `Currently serving ${removedName}.`;
=======
    return removedName;
>>>>>>> 451328479a775e03a5ad3b41d5c69fec652b8641
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    let stringLine = `The line is currently:`
      for (let i = 0; i < katzDeliLine.length; i++) {
        stringLine += ` ${i+1}. ${katzDeliLine[i]},`
      }
<<<<<<< HEAD
    return stringLine.substring(0, stringLine.length - 1);
=======
    return stringLine.substring(0, str.length - 1);
>>>>>>> 451328479a775e03a5ad3b41d5c69fec652b8641

  } else {
    return "The line is currently empty."
  }
  
}
