/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//JavaScript functions and Callbacks
// 1+2+3+4+5
//Function Declaration
//Observe: no return type, no type on parameters

function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}

//Callback example
var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

console.log(add(1, 2))     // 3
//console.log( add )       // function add(n1,n2){return n1+n2;}
console.log(add(1, 2, 3)); // 3
//console.log( add(1) );	  // NaN	
console.log(cb(3, 3, add)); // Result from the two numbers: 3+3=6'
console.log(cb(4, 3, sub)); // 'Result from the two numbers: 4+3=1'
//console.log(cb(3,3,add())); // TypeError: callback is not a function. (In 'callback(n1,n2)', 'callback' is NaN)
//console.log(cb(3,"hh",add));// 'Result from the two numbers: 3+hh=3hh'

var cb = function (n1, n2, callback) {
    if (typeof n1 === "number" &
            typeof n2 === "number" &
            typeof callback === "function") {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);

    } else {
        try {
            throw new Error("Wrong Arguments");
        } catch (e) {
            console.log(e.name + " ; " + e.message)
        }
    }
};

//Getting comfortable with filter, map and forEach:
// 1+2+3+4(a+b+c)
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
const result = names.filter(name => name.length <= 3)
console.log(result)
names.forEach(function (element) {
    console.log(element)
});
var upperNames = names.map(function (x) {
    return x.toUpperCase();
});
console.log(upperNames);

var namesHTML = function (names) {
    var result = names.map(x => "<li>" + x + "</li>");
    result.unshift("<ul>")
    result.push("</ul>")
    return result.join('');
}
console.log(namesHTML(names))

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];
var newerThan1999 = cars.filter(car => car.year > 1999)
console.log(newerThan1999)

console.log("Volvo Cars")
cars.filter(car => car.make === "Volvo").forEach(car => console.log(car))

console.log("All cars with a price below 5000")
cars.filter(car => car.price < 5000).forEach(car => console.log(car))


var SQLString = cars.map(car => "INSERT INTO cars (id,year,make,model,price) VALUES (" + car.id + "," + car.year + "," + car.make + "," + car.model + "," + car.price + ");");
console.log(SQLString)

// Asynchronous Callbacks
// forventer at der et delay mellem "aaaaaaaaa" og "bbbbbbbbb" og mellem "ddddddddd" og "eeeeeeee"
var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");
// result
//'aaaaaaaaaa'
//'dddddddddd'
//'ffffffffff'
//'eeeeeeeeee'
//'bbbbbbbbbb'





// this and constructor functions
// 1+2

function Person(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);  //Explain this 
        // The function name is Person with atribute name. So the name of the person is name so far
        // untill the Person is called before the console.log. Person gets Kurt Wonnegut as name and is inserted throughout the fucntion
    }, 2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: " + name);  //Explain this
//3
var p = new Person("Kurt Wonnegut");
function Person(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + self.name);  //Explain this - this looks at one scope out. So that means the function Person. But that used this. too. So that named the global this. so Person doesnt have a name. So it is undefined when called from the internal function. 
    }.bind(this), 2000);

    // 4
    var greeter = function () {
        console.log(this.message);
    };
    var comp1 = {message: "Hello World"};
    var comp2 = {message: "Hi"};

    var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
    var g2 = greeter.bind(comp2);//And here another “this”
    setTimeout(g1, 500);
    setTimeout(g2, 1000);

}

