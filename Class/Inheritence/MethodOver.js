// Method Overriding: is a way to override the method of the parent class in the child class.

class father {

    num1 = 10;
    num2 = 20;
    addTwoNumber(){
        console.log(this.num1 + this.num2);
    }
}

class son extends father {
    num1 = 30;
    num2 = 40;
    addTwoNumber(){
        console.log(this.num1 + this.num2);
    }
}

new son().addTwoNumber();


/*
    For using Method Overriding We get the output of the child class method.
    // Result: 70

    If we not use Method Overriding then we get the output of the parent class method.
    // Result: 30
*/