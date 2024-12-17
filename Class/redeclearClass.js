// ReDeclear Class

 class person {
    name = "Md Anas Khan";
    age = 22;
    city = "Dhaka";
    isBangladeshi = true;
    friends = ["Rahim", "Karim", "Jahid"];
    bestFriend = {
        name : "Rahim",
        age : 23,
        city : "Dhaka"
    };
    getBestFriend = function(){
        return this.bestFriend.name
    }
}

class person {
    name = "Md Anas Khan";
    age = 22;
    city = "Dhaka";
    isBangladeshi = true;
    friends = ["Rahim", "Karim", "Jahid"];
    bestFriend = {
        name : "Rahim",
        age : 23,
        city : "Dhaka"
    };
    getBestFriend = function(){
        return this.bestFriend.name
    }
}

const person1 = new person();
console.log(person1)
console.log(person1.bestFriend) 
console.log(person1.getBestFriend()) 

// *** Error ***
// SyntaxError: Identifier 'person' has already been declared

// A class can be declared only once if we try to redeclare it more than once it will give error.


// *** Another Option to declare class ***

let person = class {
    name = "Md Anas Khan";
    age = 22;
    city = "Dhaka";
    isBangladeshi = true;
    friends = ["Rahim", "Karim", "Jahid"];
    bestFriend = {
        name : "Rahim",
        age : 23,
        city : "Dhaka"
    };
    getBestFriend = function(){
        return this.bestFriend.name
    }
}

let person = class {
    name = "Md Anas Khan";
    age = 22;
    city = "Dhaka";
    isBangladeshi = true;
    friends = ["Rahim", "Karim", "Jahid"];
    bestFriend = {
        name : "Rahim",
        age : 23,
        city : "Dhaka"
    };
    getBestFriend = function(){
        return this.bestFriend.name
    }
}

const person1 = new person();
console.log(person1)
console.log(person1.bestFriend) 
console.log(person1.getBestFriend())


// *** Error ***
// SyntaxError: Identifier 'person' has already been declared

// The sum of the code that we can redeclare the class.