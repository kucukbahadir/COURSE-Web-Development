// 1. Sort table
// taken from this website: https://www.willmaster.com/
var TableLastSortedColumn = -1;

function SortTable() {

	var sortColumn = parseInt(arguments[0]); 				// Convert 1st argument from string to integer and assign to sortColumn
	var type = arguments.length > 1 ? arguments[1] : 'T';
	var table = document.getElementById("productstable"); 	// Assign table variable with table id
	var tbody = table.getElementsByTagName("tbody")[0]; 	// Assign variable tbody with table body
	var rows = tbody.getElementsByTagName("tr"); 			// Assign variable rows with table rows
	var arrayOfRows = new Array(); 							// Create a new array containing the rows of the table
	type = type.toUpperCase(); 								// Convert 'type' variable to uppercase

	// Iterate through all table rows in array
	for (var i = 0; i < rows.length; i++) {
		arrayOfRows[i] = new Object; 						// Create new object for each row
		arrayOfRows[i].oldIndex = i; 						// Manipulate DOM by changing rows index

		//  If cell text contains any of the characters /<[^>]*>, replace them with a whitespace 
		var celltext = rows[i].getElementsByTagName("td")[sortColumn].innerHTML.replace(/<[^>]*>/g, "");

		var re = type == "N" ? /[^\.\-\+\d]/g : /[^a-zA-Z0-9]/g; // determine the type to sort
		
		// look character until the 25th character of the value to compare
		arrayOfRows[i].value = celltext.replace(re, "").substr(0, 25).toLowerCase();
	}

	// to check if the user wants to sort the same column
	if (sortColumn == TableLastSortedColumn) {
		arrayOfRows.reverse(); 								// if true, just reverse the same column
	} 
	else {
		TableLastSortedColumn = sortColumn;
		
		// to call which compare function, number? or text? 
		switch (type) { 
			case "N":
				arrayOfRows.sort(CompareRowOfNumbers);
				break;
			default:
				arrayOfRows.sort(CompareRowOfText);
		}
	}

	//  to show Sorted Table
	var newTableBody = document.createElement("tbody");

	// Iterate through table rows and append data at the corresponding index
	for (var i = 0, len = arrayOfRows.length; i < len; i++) {
		newTableBody.appendChild(rows[arrayOfRows[i].oldIndex].cloneNode(true));
	}

	table.replaceChild(newTableBody, tbody);
}

// to sort we need to compare texts
function CompareRowOfText(a, b) {
	var aval = a.value;
	var bval = b.value;

	return (aval == bval ? 0 : (aval > bval ? 1 : -1));
}

// to sort we need to compare numbers
function CompareRowOfNumbers(a, b) {
	var aval = /\d/.test(a.value) ? parseFloat(a.value) : 0;
	var bval = /\d/.test(b.value) ? parseFloat(b.value) : 0;

	return (aval == bval ? 0 : (aval > bval ? 1 : -1));
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 2. RESET DATABASE and FORM FIELDS

$("#resetButton").click(function () {
	// using Ajax to reset database  
	var dataString = $.get("https://wt.ops.labs.vu.nl/api20/050dc78c/reset"); 

	location.reload(true); // Refresh page
});


//////////////////////////////////////////////////////////////////////////////////////////////////
// 3. LOAD NEW DATA TO THE DATABASE

$(document).ready(function () { // Execute only when DOM is ready
	$.getJSON("https://wt.ops.labs.vu.nl/api20/050dc78c", function (data) { // GET request - Load JSON data into 'data' argument
		var productData = "";

		// loop through JSON data and assign productData with its values for each table header
		$.each(data, function (key, value) {
			productData += "<tr>";
			productData += "<td>" + value.brand + "</td>";
			productData += "<td>" + value.model + "</td>";
			productData += "<td>" + value.os + "</td>";
			productData += "<td><img alt='" + value.model + "' src='" + value.image + "' class='bestsellerimage'></td>";
			productData += "<td>" + value.screensize + "</td>";
		});

		$("#productstable").append(productData);
	});
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// 4. DYNAMIC TABLE WITHOUT RELOADING PAGE

// Event Listener for clicking the submit button
$("form.myform").on('submit', function () {

	// to take attribute of the form dynamically
	var current = $(this),
		api = current.attr('action'),
		method = current.attr('method'),
		productData = {};

	// to take value of first row dynamically
	current.find('[name]').each(function (index, value) {
		var current = $(this),
			name = current.attr('name'),
			value = current.val();

		productData[name] = value;
	});

	// Ajax POST request for updating database
	$.ajax({
		url: api,
		type: method,
		data: productData,
		success: function (newProduct) {

			$.getJSON("https://wt.ops.labs.vu.nl/api20/050dc78c", function (data) {

				var lastElement = data[data.length - 1]; // To take last element of the data in the database
				
				// To assign productData with last new row of the table' values for each table header
				var productData = "";
				productData += "<tr>";
				productData += "<td>" + lastElement.brand + "</td>";
				productData += "<td>" + lastElement.model + "</td>";
				productData += "<td>" + lastElement.os + "</td>";
				productData += "<td><img alt='" + lastElement.model + "' src='" + lastElement.image + "' class='bestsellerimage'></td>";
				productData += "<td>" + lastElement.screensize + "</td>";

				$("#productstable").append(productData); // To insert data into the HTML
			});
		},
	});

	$(this)[0].reset(); // To empty data in the form after submit

	return false; // Not to refresh the page when submit
});