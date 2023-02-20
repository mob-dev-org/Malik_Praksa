const numbers:number[]=[1,2,4,5,6,7,7,7]
console.log(numbers)//we will console whole array
console.log(numbers.length)// consoling number of elements in array

const names=["adi","harun"]// we can put also other types of variables in array
names.push("malik")
names.pop()// adi whit out harun
names.shift()//removing first element from array
numbers.slice(2,4)//returns a shallow copy of a portion of an array into a new array -[4,5]
numbers.splice(2,1,45)//(on psition 2, remove 1 element, add 45)