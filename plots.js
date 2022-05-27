//dynamically generate the dropdown menus

//def a function to create the initial table
function init() {
    //use d3 to select the dropdown menu with its id
        //and assign to a variable
    let selector = d3.selector("#selDataset");

    //use the d3.json() method to read the data from the samples.json
        //and assign the whole files data to an arg name data
    d3.json("samples.json").then((data) => {
        //print data to ensure import worked correctly
        console.log(data);
        
        //def a variables for the "names" column - the patient ID numbers
            //using dot notation to pull
        let sampleNames = data.names;
        //call a forEach on the data names to it through
        sampleNames.forEach((sample) => {
            //for each element in the array a dropdown menu option is appended
            //the text of each dropdown menu output is the ID
            //its value prop is also assigned the ID (in the HTML)
                //makes the HTML: <option value="ID">ID</option>
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
    })}

init()

//add the optionChanged funct from the HTML file to handle the change in the
    //dropdown menu selection

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildChart(newSample);
}
//dont need to call it in the js file bc itll be called in the HTML upon change
//the newSample arg ref to the value of the selected menu option
    //bc in the HTML its optionChanged(this.value) --> so here this.value will be
    //the selection in the dropdown menu
    //aka this.value === newSample

//make the buildMetadata function to pop the demographic info panel upon id selection
    //takes in sample - or an ID # as its arg
        //when a dropdown menu option is selected the ID # is passed in as sample
function buildMetadata(sample) {
    //use d3 to pull entire dataset in file - once its read in this info is ref to 
        //as data
    d3.json("samples.json").then((data) => {
        //the metadata array is pulled from the data file w/ dot notation (is demo info)
        let metadata = data.metadata;
        //metadata array is filtered to an obj whose ID matches the one passed into 
            //the function (from the dropdown menu)
            //each metadata array contains info from one person - so filtering to 
            //find that person
        let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        //bc the result of the filter method are returned as an array,
        //the first item in that array will be our results - assign to variable
        let result = resultArray[0];
        //use d3 to select the div's id sample-metadata bc this is the id associated
            //with out demp info panel and assign to a variable so we can 
            //populate the demo info
        let PANEL = d3.select("#sample-metadata");

        //clear the contents of the panel when another ID # is chosen from the menu
        PANEL.html("");
        //append the panel with the text from the location for that person
            //chaining to append the h6 header
        PANEL.append("h6").text(result.id);
        PANEL.append("h6").text(result.ethnicity);
        PANEL.append("h6").text(result.gender);
        PANEL.append("h6").text(result.age);
        PANEL.append("h6").text(result.location);
        PANEL.append("h6").text(result.bbtype);
        PANEL.append("h6").text(result.wfreq);

    })
}