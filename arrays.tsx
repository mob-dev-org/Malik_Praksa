const numbers:number[]=[1,2,4,5,6,7,7,7]
console.log(numbers)//we will console whole array
console.log(numbers.length)// consoling number of elements in array

const names=["adi","harun"]// we can put also other types of variables in array


names.push("malik")


names.pop()// adi whit out harun


names.shift()//removing first element from array


// arr.slice([start], [end])
numbers.slice(2,4)//returns a shallow copy of a portion of an array into a new array -[4,5]


// sintax for splice:  arr.splice(start[, deleteCount, elem1, ..., elemN])
// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0
numbers.splice(2,1,45)//(on psition 2, remove 1 element, add 45)


delete numbers[4]//it will delete element on index 4, but it will 
//have same number of elements in array.... [1,2,4,5,,7,7,7]


numbers.concat(2,3)// it adds 2 and 3 to array "numbers"
// we can also add array to array
numbers.concat(2,3,[4,5],[4,6])// it wil return numbers array and adds 2,3,4,5,4,6 to it

numbers.includes(4,2)
// indexOf/include ---- 
    // arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
    // arr.includes(item, from) – looks for item starting from index from, returns true if found.
//Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.
//The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.

//find--------------

//filter is similar as find, but filter return more then one element. filter returns just one element
// sitax is:
// let results = arr.filter(function(item, index, array) {
//     // if true item is pushed to results and the iteration continues
//     // returns empty array if nothing found
//   });
let result= numbers.filter(item=>item<3)


numbers.reverse()//it reverse array,if it is 1,2,3 it becomes 3,2,1


