// Object Create by Constructor

function person (){
    this.name = "Md Anas Khan";
    this.age = 22;
    this.city = "Dhaka";
    this.isBangladeshi = true;
    this.friends = ["Rahim", "Karim", "Jahid"];
    this.bestFriend = {
        name : "Rahim",
        age : 23,
        city : "Dhaka"
    };
    this.getBestFriend = function(){
        return this.bestFriend.name
    }
}

const person1 = new person();

console.log(person1)
console.log(person1.bestFriend)
console.log(person1.getBestFriend())