let object={
    name:"osman",//storing name in object
    age:23?,//storing ags in same object......age is key, 23 is value
    "some name":"sccssscs" ,
}

alert(object.age)//alerting age from object

delete object.age;//we can delete property from object like this, but prop must be optional


// if we have propertie that has multi word name, we can not call it with comma
//i ntha case it will not be object.some name.... it will be object[some name]
//we use square brackets 
alert (object["some name"])
