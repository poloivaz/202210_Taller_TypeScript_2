import { Serie } from './serie.js';
import { dataSeries } from './data.js';

let seriesTableBody: HTMLElement = document.getElementById('series')!;
let AverageSeassonsText: HTMLElement = document.getElementById('season-average')!;
let cartaDetalles: HTMLElement = document.getElementById('detalles')!;

const nom_series: HTMLElement[] = [];

cargarSeriesATabla(dataSeries);
AverageSeassonsText.innerHTML = `Seasons average: ${promedioSeassons(dataSeries)}`
desplegarDetalles(nom_series[0].children[1].textContent!,dataSeries)

nom_series.forEach(elemento => {
  elemento.onclick = () => desplegarDetalles(elemento.children[1].textContent!,dataSeries);
})

function cargarSeriesATabla(series: Serie[]): void {
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>${serie.id}</b></td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    nom_series.push(trElement)
    seriesTableBody.appendChild(trElement);
  });
}

function promedioSeassons(series: Serie[]): number {
  let average: number = 0;
  let num_series: number = 0;
  series.forEach(serie => {
    average += serie.seasons;
    num_series += 1;
  })
  return average/num_series;
}

function desplegarDetalles(name: string, series: Serie[]) {
  let serie = name === '' ? dataSeries : series.filter( c => c.name.match(name));
  console.log(`<img class="card-img-top" src="${serie[0].image}" alt="ERR.">`)
  cartaDetalles.innerHTML = `<img class="card-img-top" src="${serie[0].image}" alt="ERR.">
                            <div class="card-body">
                              <h5 class="card-title">${serie[0].name}</h5>
                              <p class="card-text">${serie[0].description}</p>
                              <a href="${serie[0].link}" target="_blank">${serie[0].link}</a> 
                            </div>`;
}