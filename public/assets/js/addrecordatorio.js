// Asignar los valores de PHP a variables de JavaScript
var ano = "2023";
var mes = Number("10") + 1; // Sumar 1 al mes
var dia = "17";
var hora= "190000";

// Asegurar que mes y día tengan dos dígitos
mes = mes.toString().padStart(2, '0');
dia = dia.toString().padStart(2, '0');

// Crear la fecha en el formato requerido
var startDate = ano + mes + dia + "T" + hora;

// Código para generar el archivo .ics
document.getElementById('agregarCalendario').addEventListener('click', function(e) {
    e.preventDefault();

    var title = "Recordatorio de Boda Beatriz y Josué";
    var description = "Llegó el gran día!";

    var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\n";
    icsMSG += "DTSTART;VALUE=DATE-TIME:" + startDate + "\n";
    icsMSG += "DESCRIPTION:" + description + "\n";
    icsMSG += "SUMMARY:" + title + "\n";
    icsMSG += "LOCATION:" + "La Finca, Jardín de Eventos \n";
    icsMSG += "DTSTAMP:" + "20180210T093900Z \n";
    icsMSG += "END:VEVENT\nEND:VCALENDAR";
    console.log(icsMSG)
    var blob = new Blob([icsMSG], {type: 'text/calendar;charset=utf-8'});
    var link = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = link;
    a.download = 'boda.ics';
    a.click();
    window.URL.revokeObjectURL(link);
});