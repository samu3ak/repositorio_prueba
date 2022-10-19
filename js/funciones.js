setTimeout(() => {
    var titulo = document.getElementById("pregunta");
    titulo.innerText = "Sé solo feo";
    titulo.style.backgroundColor = "blue";
    titulo.style.color = "white";
}, 6000); // El texto cambiará a los 6 segundos

// window.open();
var subVentana = window.open("https://google.es", "nueva", "height=800,width=600");

setTimeout(() => {
    subVentana.close();
}, 6000);