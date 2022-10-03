// alert("Hello World!");
//console.log("CHAVALERÍAA!!!");

var table = "Normal Table"; //Variables globales de la aplicación
let chair = "One chair"; //Variables internas dentro de funciones por ejemplo
console.log(table);
console.log(chair);

let testBoolean = true;
console.log(testBoolean);

let testNumber = 10;
console.log(testNumber);

let testString = "text";
console.log(testString);

// Objetos

let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

let testNumberObject = new Number(10);
console.log(testNumberObject);

let testStringObject = new String("text");
console.log(testStringObject);

// Concatenar variables

let pName = "John";
let surname = "Doe";
let question = "How are you "+pName+" "+surname+"?";
console.log(question);

// ----

let age = 23;
let questionAge = `How old is ${pName} ${surname}?`;
let answer = "He is "+age+" years old";
console.log(questionAge);
console.log(answer);
