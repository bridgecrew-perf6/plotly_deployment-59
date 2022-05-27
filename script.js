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
    console.log(newSample)
}
//dont need to call it in the js file bc itll be called in the HTML upon change
//the newSample arg ref to the value of the selected menu option
    //bc in the HTML its optionChanged(this.value) --> so here this.value will be
    //the selection in the dropdown menu
    //aka this.value === newSample