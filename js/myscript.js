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
console.log(typeof (testBoolean2));
console.log(typeof (testNumber2));
console.log(typeof (testString2));
console.log(typeof (testBooleanObject2));

console.log("Null Ejemplo");
let testNull = null;
console.log(testNull);
console.log(typeof (testNull));

console.log("Undefined ejemplo");
let testUndefined;
console.log(testUndefined);

// Array
var first_array = [];
var second_array = new Array(3);
var third_array = new Array(3, 5);
var fourth_array = new Array(3, 5, "Seville", true, third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

// Array access
console.log(third_array[1]);
console.log(fourth_array[4][0]);
console.log(fourth_array[2][0]);
console.log(fourth_array[2][1]);
console.log(fourth_array[2][2]);
console.log(fourth_array[2][3]);

// Array length
console.log("El tamaño del array cuarto es " + fourth_array.length);

// Array push (añade al final)
console.log(fourth_array.push("Spain"));
console.log(fourth_array);

// Array unshift (añade al principio)
fourth_array.unshift(1);
console.log(fourth_array);

// For, forEach
console.log("For y foreach");
for (var i = 0; i < fourth_array.length; i++) {
    console.log("Entramos en la iteración de " + fourth_array[i]);
}
console.log("De otra forma");
for (var i = fourth_array.length - 1; i >= 0; i--) {
    console.log("Entramos en la iteración de " + fourth_array[i]);
}

console.log("For each ejemplo");
var i = fourth_array.length - 1;
for (; i >= 0; i--) {
    console.log("Entramos en la iteración de " + fourth_array[i]);
}

console.log("Otro for each¿");
fourth_array.forEach(function (element) {
    console.log("Fourth iteration " + element);
});

// If / else / elseif
console.log("If else else if example");
let aux = 3;
if (aux > 0) {
    console.log("This number is positive");
} else if (aux < 0) {
    console.log("This number is negative");
} else {
    console.log("This number is 0");
}

// Regular expressions
console.log("Expresión regular");
var DNI_REGEX = /^(\d{8})([A-Z])$/;
let dni = "12345678K";
if (dni.match(DNI_REGEX)) {
    console.log("Correct DNI");
} else {
    console.log("Incorrect DNI");
}

// Comparison Operators
console.log("Comparison Operators");
console.log(8 == 8);
console.log(8 == "8");
console.log(8 === 8);
console.log(8 === "8");

console.log("Mas");
console.log(5 > 8);
console.log(5 < 8);
console.log(5 >= 8);
console.log(5 <= 8);

console.log("Mas x2");
console.log(8 != 8);
console.log(8 != "8");
console.log(8 === 8);
console.log(8 !== "8");

console.log("Mas x3");
console.log("test" == "test");
console.log("test" === 'test');
console.log("test" == "Test");


// Loop While
console.log("Loop While");

var i = 1;
while (i < 10) {
    console.log("The number is " + i);
    i++;
}

// Switch/Case
console.log("Switch/Case");


//Date object
console.log("Date object");

let today = new Date();
let first_october = new Date(2019, 9, 1);
console.log(today);
console.log(first_october);
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getMonth() + 1);

// Comparar fechas
if (today > first_october) {
    console.log("Today is after to first october");
} else {
    console.log("Today is before to first october");
}

//Events JS
console.log("JS Event (Press button)");

function myFirstFunction() {
    console.log("Thank you for you click.");
}

function mySecondFunction() {
    console.log("Thank you for your interest.");
}

// Select DOM
console.log("Select DOM");

var div = document.getElementById("my_div");
div.classList.add("my_class");
console.log(div);

// Select DOM II
var div = document.getElementsByTagName("div");
console.log(div);

var second_div = document.querySelector("#my_second_div"); // Selector de CSS Básicamente
console.log(second_div);

// Función auxiliar kekw
console.log("Función que importa JQuery muy útil");
function $(selector) {
    return document.querySelectorAll(selector);
}
console.log($("#my_third_div"));
console.log($(".div_especial"));

// Funciones
var numbers = [1, 2, 3, 4];
var n_elevator_2 = numbers.map(function (n) { return n * n }); // A un array le aplico a cada uno de sus elementos una función
console.log(n_elevator_2);

// Funciones flecha, simplificada

var n_elevator_2 = numbers.map((n) => { return n * n }); // Lo mismo de arriba pero más simplificado con flechas, te ahorras function
console.log(n_elevator_2);

var n_elevator_2 = numbers.map((n) => { console.log(n * n); return n * n }); // Puedes meter más shit, al fin y al cabo es una función
console.log(n_elevator_2);

var n_elevator_2 = numbers.map(n => n * n); // Más limpia
console.log(n_elevator_2);

/** El método map, lo que hace es que dado un array, aplica todo lo que se mete dentro a cada uno de los
 * elementos que se encuentran dentro del array
 */
console.log("Más ejemplos");

let numbers2 = [[1, 2], [2, 3], [3, 4], [4, 5]];
let itself = numbers2.map(([x, y]) => x * y); // Para manejar bidimensionales y toquetear
console.log(itself);

// FORMULARIO PRUEBA
function $(selector) {
    return document.querySelector(selector); // VOLVEMOS A USARLA
}

$("#btn2").addEventListener("click", function () {
    var input = document.createElement("input");
    console.log(input);
});

// LE METO ATRIBUTOS

// $("#btn2").addEventListener("click", function () { // LO MODIFICO PARA QUE CREE LA ETIQUETA
//     var input = document.createElement("input");
//     input.setAttribute("type", "email");
//     input.setAttribute("placeholder", "E-mail");
//     input.setAttribute("name", "mails");
//     $("#forms").appendChild(input);
// });

// MAS CAMBIOS 

$("#btn2").addEventListener("click", function () { // LO MODIFICO PARA QUE CREE LA ETIQUETA
    var input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "E-mail");
    input.setAttribute("name", "mails");
    $("#forms").appendChild(input);
    myAlert("Add new email input");
});

// function myAlert(msg) {
//     var div = document.createElement("div");
//     div.classList.add("alert");
//     div.innerHTML = msg; // METE EN MEDIO DE LA ETIQUETA EL TEXTO MSG MANDADO POR PARÁMETRO
//     $("body").insertBefore(div, $("body").firstChild); // LO METE ANTES DEL PRIMER ELEMENTO DEL BODY, EN LOS PARÁMETROS PRIMERO VA 
//     // LO QUE QUIERES METER (EL DIV), ANTES DEL PRIMER HIJO DEL BODY
// }

function bind_close() {
    let elements = document.querySelectorAll(".close");
    for (var i = elements.length - 1; i >= 0; i--) {
        let el = elements[i];
        el.addEventListener("click", function () {
            this.parentNode.style.display = "none";
        });
    }
}

function myAlert(msg) { // LA MEJORO PARA AÑADIR UN BOTON DE CIERRE DINAMICAMENTE
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML = msg; // METE EN MEDIO DE LA ETIQUETA EL TEXTO MSG MANDADO POR PARÁMETRO
    var close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = "X";
    div.appendChild(close);
    $("body").insertBefore(div, $("body").firstChild); // LO METE ANTES DEL PRIMER ELEMENTO DEL BODY, EN LOS PARÁMETROS PRIMERO VA 
    // LO QUE QUIERES METER (EL DIV), ANTES DEL PRIMER HIJO DEL BODY
    bind_close();
}
