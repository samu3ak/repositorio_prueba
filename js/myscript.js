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
let question = "How are you " + pName + " " + surname + "?";
console.log(question);

// Inyección de variables

let age = 23;
let questionAge = `How old is ${pName} ${surname}?`;
let answer = "He is " + age + " years old";
console.log(questionAge);
console.log(answer);

// Concatenar usando método string.concat(string)

let questionConcat = "How are you ".concat(pName) + " ".concat(surname) + "??";
console.log(questionConcat);

// MATEMÁTICAS
console.log("Operaciones básicas");

let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
let rest = operator_a - operator_b;
let mult = operator_a * operator_b;
let division = operator_a / operator_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);

// Incremento, decremento...
console.log("Incremento, decremento, exponente...");

let operador_a = 3;
let operador_b = 3;
let expo = operador_a ** operador_b;
console.log(++operador_a);
console.log(--operador_b);
console.log(expo);

// Operaciones de asignacion
console.log("Operadores de asignación");
let x = 5;
let y = 6;
console.log(x += 5);
console.log(x -= 5);
console.log(x *= 3);
console.log(y /= 2);

// tpyeof, null & undefined
console.log("Type of");
let testBoolean2 = true;
let testNumber2 = 12;
let testString2 = "Hello!";
let testBooleanObject2 = new Boolean(true);
console.log(typeof(testBoolean2));
console.log(typeof(testNumber2));
console.log(typeof(testString2));
console.log(typeof(testBooleanObject2));

console.log("Null Ejemplo");
let testNull = null;
console.log(testNull);
console.log(typeof(testNull));

console.log("Undefined ejemplo");
let testUndefined;
console.log(testUndefined);

// Array
