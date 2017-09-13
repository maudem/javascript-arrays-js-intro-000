var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) =>{
  var destructivelyAddElementToBeginningOfArray = array.unshift(element)
  return addElementToBeginningOfArray
}

var destructivelyAddElementToBeginningOfArray =(array, element) =>{
  array.unshift(element)
  return destructivelyAddElementToBeginningOfArray
}
