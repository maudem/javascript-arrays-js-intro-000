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
  return array.slice(1)
}

var destructivelyRemoveElementFromBeginningOfArray = (array, element) =>{
  array.shift(element)
  return array
}

var removeElementFromEndOfArray = (array, element) =>{
  return array.slice(0, array.length-1)

}

var destructivelyRemoveElementFromEndOfArray = (array, element) =>{
  array.pop(element)
  return array
}

var accessElementInArray = (array, index )=> {
    return array[index]
}
