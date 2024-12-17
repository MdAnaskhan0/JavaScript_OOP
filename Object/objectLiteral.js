// Object By Literal

// What is Object ?
// Object is a collection of properties and methods.

// What is Object Literal?
// Object Literal is a way to create an object in JavaScript.

const person = {
    name : "Md Anas Khan",
    age : 22,
    city : "Dhaka",
    isBangladeshi : true,
    friends : ["Rahim", "Karim", "Jahid"],
    bestFriend : {
        name : "Rahim",
        age : 23,
        city : "Dhaka"
    },
    getBestFriend : function(){
        return person.bestFriend.name
    }
}

// console.log(person)
console.log(person.bestFriend)
console.log(person.getBestFriend())