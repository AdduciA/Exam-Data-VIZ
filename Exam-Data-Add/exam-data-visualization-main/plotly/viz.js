fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {

  sortByCountryPopulation(data);

  // Sélectionner les 30 premiers pays
  const top30Countries = data.slice(0, 30);

  const countryNames = top30Countries.map(country => country.country);
  const countryPopulations = top30Countries.map(country => country.population);
  const dataTrace = {
    x: countryNames,
    y: countryPopulations,
    type: 'bar'
  };

  const layout = {
    title: 'Data distribution of countries population ',
    xaxis: {
      title: 'Countries'
    },
    yaxis: {
      title: 'Population'
    }
  };


  Plotly.newPlot('data-viz', [dataTrace], layout);
}


function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}

