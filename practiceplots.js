// //Line graph 
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Bar graphs with title
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", [trace], layout);


//Practice bar graph

// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };

// var data = [trace]

// var layout = {
//     title: "Percent of Total Orders Per Beverage type",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "%o of Drinks Ordered"}
// }

// Plotly.newPlot('plotArea', data, layout)

// modified above graph to be pie chart
    // need to change the chart type and the keywords for x & y values to labels and values so the graph will render

    // var trace = {
    //     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    //     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    //     type: "pie"
    // };
    
    // var data = [trace]
    
    // var layout = {
    //     title: "Percent of Total Orders Per Beverage type",
    //     xaxis: {title: "Drinks"},
    //     yaxis: {title: "%o of Drinks Ordered"}
    // }
    
    // Plotly.newPlot('plotArea', data, layout)


    // practice scatter plot using the documentation
    var trace1 = {
        x: [1,2,3,4,6,8],
        y: [12,15,7,23,41,8],
        mode: 'markers',
        type: 'scatter'
    };
    
    var trace2 = {
        x: [5,9,1,7,4],
        y: [11,25,32,1,5],
        mode: 'lines+markers',
        type: 'scatter'
    };
    // var layout = {
    //     title: "Percent of Total Orders Per Beverage type",
    //     xaxis: {title: "Drinks"},
    //     yaxis: {title: "%o of Drinks Ordered"}
    // }
    var data = [trace1, trace2];

    Plotly.newPlot('plotArea', data,)
