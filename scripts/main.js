import { dataSeries } from './data.js';
var seriesTableBody = document.getElementById('series');
var AverageSeassonsText = document.getElementById('season-average');
var cartaDetalles = document.getElementById('detalles');
var nom_series = [];
cargarSeriesATabla(dataSeries);
AverageSeassonsText.innerHTML = "Seasons average: ".concat(promedioSeassons(dataSeries));
desplegarDetalles(nom_series[0].children[1].textContent, dataSeries);
nom_series.forEach(function (elemento) {
    elemento.onclick = function () { return desplegarDetalles(elemento.children[1].textContent, dataSeries); };
});
function cargarSeriesATabla(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        nom_series.push(trElement);
        seriesTableBody.appendChild(trElement);
    });
}
function promedioSeassons(series) {
    var average = 0;
    var num_series = 0;
    series.forEach(function (serie) {
        average += serie.seasons;
        num_series += 1;
    });
    return average / num_series;
}
function desplegarDetalles(name, series) {
    var serie = name === '' ? dataSeries : series.filter(function (c) { return c.name.match(name); });
    console.log("<img class=\"card-img-top\" src=\"".concat(serie[0].image, "\" alt=\"ERR.\">"));
    cartaDetalles.innerHTML = "<img class=\"card-img-top\" src=\"".concat(serie[0].image, "\" alt=\"ERR.\">\n                            <div class=\"card-body\">\n                              <h5 class=\"card-title\">").concat(serie[0].name, "</h5>\n                              <p class=\"card-text\">").concat(serie[0].description, "</p>\n                              <a href=\"").concat(serie[0].link, "\" target=\"_blank\">").concat(serie[0].link, "</a> \n                            </div>");
}
