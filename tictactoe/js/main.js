$(document).ready(function () {

    var fields = document.querySelectorAll(".container div");
    var seleccionados = [];

    // User click any box
    $(".container div").click(function (e) {
        e.preventDefault();
        let seleccionado = $(this).attr("value");

        if (seleccionados.indexOf(seleccionado) == -1) {
            seleccionados.push(seleccionado);


            $(fields[seleccionado]).text("X");

            // Generates random number in order to select a box that the user hasn't checked yet
            if (seleccionados.length < 8) {
                let random = Math.floor(Math.random() * 9);
                while (seleccionados.indexOf(random.toString()) != -1) {
                    random = Math.floor(Math.random() * 9);
                }
                $(fields[random]).text("O");
                seleccionados.push(random.toString());
            }
        }
    });
});