// What is Class?
// Class is a blueprint for creating objects.


// Simple Class Example
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