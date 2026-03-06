// ES6 Features Example

// Using const
const numbers = [10, 20, 30, 40, 50];

// Arrow function with map()
const doubledNumbers = numbers.map(num => num * 2);

// Arrow function with filter()
const greaterNumbers = numbers.filter(num => num > 25);

// Class Example
class Person {
constructor(name, age){
this.name = name;
this.age = age;
}

display(){
console.log(this.name + " is " + this.age + " years old");
}
}

let p1 = new Person("Ali",22);

console.log("Original Numbers:",numbers);
console.log("Doubled Numbers:",doubledNumbers);
console.log("Numbers greater than 25:",greaterNumbers);

p1.display();