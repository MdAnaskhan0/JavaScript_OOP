// Change Property of Object by Constructor

class numberAddition {

    num1 = 10;
    num2 = 20;

    constructor(x, y) {
        this.num1 = x;
        this.num2 = y;
    }

    addTwoNumbers() {
        console.log(this.num1 + this.num2);
    }
}

const num1 = new numberAddition(5, 10);
num1.addTwoNumbers();


// *** Result ***
// Without Constructor: 30

// With Constructor: 15