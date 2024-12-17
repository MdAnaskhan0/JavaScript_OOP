// Static Keyword: is a keyword that is used to create a static property or method.
// Static property: is a property that is shared by all instances of a class.
// Static method: is a method that is shared by all instances of a class.

class person {
    static name = "Md Anas Khan";
    static age = 22;
    city = "Dhaka";
    isBangladeshi = true;
    friends = ["Rahim", "Karim", "Jahid"];
    bestFriend = {
        name: "Rahim",
        age: 23,
        city: "Dhaka",
    };
    static getBestFriend = function () {
        return this.bestFriend.name;
    };
}

console.log(person.name);
// *** Result ***
// Md Anas Khan

console.log(person.age);
// *** Result ***
// 22

console.log(person.getBestFriend());
// *** Result ***
// Rahim

console.log(person.bestFriend);
// Error
// TypeError: Cannot read properties of undefined (reading 'name')

// *** Important Note ***: Using Static Keyword we can create a static property or method to access it without creating an object of the class itself.
