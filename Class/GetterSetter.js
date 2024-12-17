// Getter: is a special type of function that is used to get the value of a property.

// Setter: is a special type of function that is used to set the value of a property.


// Simple Example of Getter and Setter

class product {
    
    // Set method
    set setPrice(value){
        this.price = value;
    }

    // Get method
    get getPrice(){
        return this.price
    }

}

const product1 = new product();
product1.setPrice = 500;
console.log(product1.getPrice)
// *** Result ***
// 500

const product2 = new product();
product2.setPrice = 1000;
console.log(product2.getPrice)
// *** Result ***
// 1000