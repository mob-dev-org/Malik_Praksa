let numbers:number[] = [1,2,3,4,5]
alert(...numbers)//it will alert all numbers from array

type People={
    name:string,
    age:number,
    job:string
}[]

let people:People=
    [{name:"Malik", 
    age:23,
    job:"police"},

    {name:"Harun", 
    age:25,
    job:"police"}]


alert({...people})