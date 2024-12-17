// Inheritence Static: is a way to create a new class from an existing class.

class father{
    static fatherMessage(){
        return "Father Message";
    }
}

class son extends father{
    sonMessage(){
        return "Son Message";
    }
}

// Using Static Keyword we can access the static method without creating an object of the class itself.
console.log(son.fatherMessage());
console.log(new son().sonMessage());