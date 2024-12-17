// What is Class?
// Class is a blueprint for creating objects.


// Simple Class Example
class person {
    
    // Properties
    // ** In Class there is no need to use var, let, const to declare variables **
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

    // Methods
    // ** In Class there is no need to use function keyword to declare methods **
    getBestFriend = function(){
        return this.bestFriend.name
    }
}

// Object created by Class
const person1 = new person();
console.log(person1)
console.log(person1.bestFriend)
console.log(person1.getBestFriend())

const person2 = new person();
console.log(person2)
console.log(person2.bestFriend)
console.log(person2.getBestFriend())