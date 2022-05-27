function init() {
  // Grab a reference to the dropdown select element
  let selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    let sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    let metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    let result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    let PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    let samples = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    let sampleResults = samples.filter(samplesObject => samplesObject.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    let results = sampleResults[0];
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    let otuIDs = results.otu_ids;
    let otuLabels = results.otu_labels.slice(0,10).reverse();
    let sampleValues = results.sample_values.slice(0,10).reverse();

    let bubbleOtuLabels = results.otu_labels;
    let bubbleSampleValues = results.sample_values;
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    let yticks = otuIDs.map(obj => "OTU: " + obj).slice(0,10).reverse()
    // let yticksresults = sampleResults.map((a,b) => a.sample_values - b.sample_values).reverse();
    // let yticks = yticksresults.slice(0,10);
    
    console.log(yticks)

    // 8. Create the trace for the bar chart. 
    let barData = [{
      x: sampleValues,
      y: yticks,
      type:"bar",
      orientation: 'h',
      text:otuLabels
    }];

    // 9. Create the layout for the bar chart. 
    let barLayout = {
      title: "Top 10 Bacteria Found in Sample",
      xaxis: {title: "Sample Values"},
      yaxis: {title: "OTU ID"}
    };

    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    let bubbleData = [{
      x: otuIDs,
      y: bubbleSampleValues,
      text: bubbleOtuLabels,
      mode: "markers",
      marker: {
        size: bubbleSampleValues,
        color: otuIDs,
        colorscale: "Earth"
      }
    }];

    // 2. Create the layout for the bubble chart.
    let bubbleLayout = {
      title: "Top 10 Bactera Found in Sample",
      xaxis: {title: "OTU ID"},
      yaxis: {title: "Sample Values"}
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("gauge", bubbleData, bubbleLayout); 
  });
}



// // Create the buildChart function.
// function buildCharts(sample) {
//   // Use d3.json to load the samples.json file 
//   d3.json("samples.json").then((data) => {
//     console.log(data);

//     // Create a variable that holds the samples array. 

//     // Create a variable that filters the samples for the object with the desired sample number.

//     // 1. Create a variable that filters the metadata array for the object with the desired sample number.

//     // Create a variable that holds the first sample in the array.
  

//     // 2. Create a variable that holds the first sample in the metadata array.
    

//     // Create variables that hold the otu_ids, otu_labels, and sample_values.


//     // 3. Create a variable that holds the washing frequency.
   
//     // Create the yticks for the bar chart.

//     // Use Plotly to plot the bar data and layout.
//     Plotly.newPlot();
    
//     // Use Plotly to plot the bubble data and layout.
//     Plotly.newPlot();
   
    
//     // 4. Create the trace for the gauge chart.
//     var gaugeData = [
     
//     ];
    
//     // 5. Create the layout for the gauge chart.
//     var gaugeLayout = { 
     
//     };

//     // 6. Use Plotly to plot the gauge data and layout.
//     Plotly.newPlot();
//   });
// }
