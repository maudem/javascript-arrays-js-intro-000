var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) =>{
   array = [element, ...array]
  return array
}

var destructivelyAddElementToBeginningOfArray =(array, element) =>{
  array.unshift(element)
  return array
}

var addElementToEndOfArray = (array, element) => {
  array = [...array, element]
  return array
}

var destructivelyAddElementToEndOfArray = (array, element) => {
 array.push(element)
  return array
}

var removeElementFromBeginningOfArray = (array, element) =>{
  array.slice(element)
  return array
}

var destructivelyRemoveElementFromBeginningOfArray = (array, element) =>{
  array.shift(element)
  return array
}

var destructivelyRemoveElementFromEndOfArray = (array, element) =>{
  array.pop(element)
  return array
}

var accessElementInArray = (array, index )=> {
    return array[index]
}
