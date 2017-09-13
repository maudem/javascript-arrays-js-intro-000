var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) =>{
   array = [element, ...array]
  return array
}

var destructivelyAddElementToBeginningOfArray =(array, element) =>{
  element = array.unshift(element)
  return array
}

var addElementToEndOfArray = (array, element) => {
  array = [...array, array]
  return array
}

var destructivelyAddElementToEndOfArray = (array, element) => {
 element = array.push(element)
  return array
}

var accessElementInArray = (array, index )=> {
    return array[index]
}
