$(document).ready(function () {

    var fields = document.querySelectorAll(".container div");
    var seleccionados = [];
    var turnoX = true;
    var partidaFinalizada = false;

    // User click any box
    $(".container div").click(function (e) {
        e.preventDefault();
        let seleccionado = $(this).attr("value");

        if (seleccionados.indexOf(seleccionado) == -1 && !partidaFinalizada) {
            seleccionados.push(seleccionado);

            if (turnoX) {
                $(fields[seleccionado]).text("X");
                partidaFinalizada = haGanado("X");
            } else {
                $(fields[seleccionado]).text("O");
                partidaFinalizada = haGanado("O");
            }
            turnoX = !turnoX;
        }
        if (partidaFinalizada) {
            if (!turnoX) {
                alert("Ha ganado X");
            } else {
                alert("Ha ganado O");
            }
        }
    });

    // Checks if player won
    function haGanado(turno) {
        let one = 0, two = 1, three = 2;
        let haGanado = false;
        while (!haGanado && three <= 8) {
            haGanado = $(`.container div[value=${one}]`).text() == turno
                && $(`.container div[value=${two}]`).text() == turno
                && $(`.container div[value=${three}]`).text() == turno;
            one += 3, two += 3, three += 3;
        }
        one = 0, two = 3, three = 6;
        while (!haGanado && three <= 8) {
            haGanado = $(`.container div[value=${one}]`).text() == turno
                && $(`.container div[value=${two}]`).text() == turno
                && $(`.container div[value=${three}]`).text() == turno;
            one += 1, two += 1, three += 1;
        }
        if (!haGanado) {
            haGanado = ($(`.container div[value=0]`).text() == turno
                && $(`.container div[value=4]`).text() == turno
                && $(`.container div[value=8]`).text() == turno) ||
                ($(`.container div[value=2]`).text() == turno
                    && $(`.container div[value=4]`).text() == turno
                    && $(`.container div[value=6]`).text() == turno);
        }
        return haGanado;
    }
});