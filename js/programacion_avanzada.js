// Sort
var testArray = [10, 1, 2, 3, 5, 9, 24, 22, 45, 32];
testArray.sort();
console.log(testArray);

function sortNumber(a, b) {
    return a - b; //b-a para la inversa (mayor a menor)
}
console.log(testArray.sort(sortNumber));

// Reverse
var testArray = [10, 1, 2, 3, 5, 9, 24, 22, 45, 32];
testArray.reverse(); // Devuelve el array al revés
console.log(testArray);

// Split
var testString = "a,b,c,d,e,f,2,3,44,43";
var testArray = testString.split(","); // Splitea la cadena usando como divisor el parámetro de entrada dado, en este caso la comilla
// devolviendo un array con los elementos separados
console.log(testArray);

// Join
var testString = "a,b,c,d,e,f,2,3,44,43";
var testArray = testString.split(",");
var testJoin = testArray.join("."); // Pasa de un array a un string usando como separador el parámetro dado, en este caso un punto
console.log(testJoin);

// Filter
var testArray = [10, 2, 3, 5, 9];
var pairnumber = testArray.filter((num) => { // Te saca del array los elementos que cumplan la condición dada mediante el return
    // en este caso devuelve en otro array los números pares
    return num % 2 === 0;
});
console.log(pairnumber);

// Map
var testArray = [1, 2, 3, 5, 7];
var testArray2 = testArray.map(function (num) { //Aplica a cada uno de los elementos del array lo que hay en la función
    return num * num;
});
console.log(testArray2);

// Callbacks
setTimeout(function () {
    console.log("Hello World"); //Tarda en pintar hello world
}, 2500); // Intervalo


// Closures
document.getElementById("btn").addEventListener("click", () => {
    console.log("Click detected");
});

// Closures II
// In this way we don't contaminate the JS Scope
(function () {
    document.getElementById("btn").addEventListener("click", () => {
        console.log("Click detected");
    });
})(); // Agrupando la función mediante la clausura, para tener las cosas más delimitadas y controlar el alcance

// JSON => JavaScript Object Notation
// Dictionary / Hashes
var course = {
    title: "Course JS Advanced",
    section: 4,
    subsection: 6,
    teacher: "Javier Prada",
    intro: function(){
        console.log("Welcome to "+this.title+" with "+this.section+" sections");
        this.function2();
    },
    function2: function(){
        console.log("Into to second function");
    }
}
console.log(course["teacher"]);
console.log(course.title);
course.intro();
