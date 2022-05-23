const cityGrowth = cityGrowths;
console.log(cityGrowths);

let sortedCities = cityGrowth.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

let topFiveCities = sortedCities.slice(0,5);

let topFiveCityNames = topFiveCities.map(city => city.City);
let topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);