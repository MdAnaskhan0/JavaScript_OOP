// Object created by Inheritence

const person = new Object();

person.name = "Md Anas Khan";
person.age = 22;
person.city = "Dhaka";
person.isBangladeshi = true;
person.friends = ["Rahim", "Karim", "Jahid"];
person.bestFriend = {
    name : "Rahim",
    age : 23,
    city : "Dhaka"
}
person.getBestFriend = function(){
    return person.bestFriend.name
}

console.log(person)
console.log(person.bestFriend)
console.log(person.getBestFriend())