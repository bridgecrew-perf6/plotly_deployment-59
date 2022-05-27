// retrieve the data from the samples.json file and print so you know it worked
d3.json('samples.json').then(function(data){
    console.log(data);
});

//use d3 to detect a change in the drop down menu
d3.selectAll("body").on("change", updatePage);
//def a function that d3 will call to handle the change
function updatePage() {
    //def a variable where d3 will select the dropdown menu using the id from the HTML
    let dropdownMenu = d3.selectAll("#selectOption").node();
    //pull the id from the dropdown menu so you can rec which table youre working with
    let dropdownMenuID = dropdownMenu.id;
    //pull the value from the menu, which is the user selected option
    let selectedOption = dropdownMenu.value;
    //log the dropdown menu ID and user selected option
    console.log(dropdownMenuID);
    console.log(selectedOption);
  };