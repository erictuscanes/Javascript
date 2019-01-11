// Import the data from data.js
var tableData = data;

// Create table 
var tbody = d3.select("tbody");

// Show all data
tableData.forEach(function(sighting) {
	var row = tbody.append("tr");
	Object.entries(sighting).forEach(function([key, value]) {
		
		var cell = row.append("td");
		cell.text(value);
	});
});

// Insert filter
var button = d3.select("#filter-btn");

button.on("click", function() {
	// Prevent page from refreshing
  	d3.event.preventDefault();

  	// Remove previous data
  	d3.selectAll("td").remove();

  	// Input
  	var inputElement = d3.select("#datetime");

  	// Property value
  	var inputValue = inputElement.property("value");

  	// Filter by datetime
  	var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  	// Show filtered results
	filteredData.forEach(function(sighting) {
		var row = tbody.append("tr");
		Object.entries(sighting).forEach(function([key, value]) {
			
			var cell = row.append("td");
			cell.text(value);
		});
	});
});
