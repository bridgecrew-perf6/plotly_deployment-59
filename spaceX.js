// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });

//pull the washing freq from the metadata, then obj per person and sort descending
d3.json("samples.json").then(function(data) {
    //map each obj (person) and use dot notation to pull the wfreq then sort in desc with b-a
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
    //remove null values
    filteredWFreq = wfreq.filter(element => element != null);
    // console.log(wfreq)
});

//use the object.entries and forEach to print all metadata of the first person in the samples.json data
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});