// first function to render initial visualization
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data);
  };
  
  //when the HTML changes with the id dropdownMenu the updatePlotly
    //function is triggered
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);

  //function to handle change in the dropdownMenu
  function updatePlotly() {
    //select the dropdown menu from HTML with D3 & its id
    let dropdownMenu = d3.select("#dropdownMenu");
    //get the user input selection from the info
    let dataset = dropdownMenu.property("value");
  
    //def the constant x data and make an empty list for the 
        //input det y data to be selected for with an if statement
    let xData = [1, 2, 3, 4, 5];
    let yData = [];
  
    //if the dataset1 (1st option) is selected add this y dataset
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    //if the dataset2 (2nd option) is selected add this y dataset
        //variable dataset is assigned to the value of the dropdown 
        //menu option selected by the user
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
    
    //def the trace with the constant x data and the input determined
        //y values, and redo the plot with the new data 
    let trace = {
      x: [xData],
      y: [yData],
    };
    //redo the plot
    //the restyle() defaults to having an object (the trace here) 
        //rather than an array so dont have to put [trace]
    Plotly.restyle("plot", trace);
  };
  
  init();