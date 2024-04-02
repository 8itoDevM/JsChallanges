// wirte a code that recives/get 3 values: name, age and city
// write a message taht combine the 3 values together 
// output on conole or HTML

let name = "Robert";
let age = 37;
let city = "Barcelona";

/* Simple way
function combineValues(){
    return `My name is ${name} i'm ${age} years old and i live in ${city}`;
}

console.log(combineValues());
*/

// More complex way

function getValues(){
    name = prompt(`What's your name?`);
    age = prompt(`What's your age?`);
    city = prompt(`What's the name of the city you live in?`);
}

function combineValues(name, age, city){
    return `My name is ${name} i'm ${age} years old and i live in ${city}`;
}

getValues();
let msg = combineValues(name, age, city);
console.log(msg);