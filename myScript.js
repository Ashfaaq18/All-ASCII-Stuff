function mainTabs(a) {
	
	switch(a.href){
        case "Table":
            document.getElementById("content").innerHTML = "table content";
            break;
        case "Art":
            document.getElementById("content").innerHTML = "art content";
            break;
        case "Draw":
            document.getElementById("content").innerHTML = "draw content";
            break;
        default:
            return false;
	}
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function tableFromJson() {
	// the json data. (you can change the values for output.)
	var ASCII = ASCIIdata;

	// Extract value from table header. 
	// ('Dec', 'Char', and 'Desc')
	var col = [];
	for (var i = 0; i < ASCII.length; i++) {
		for (var key in ASCII[i]) {
			if (col.indexOf(key) === -1) {
				col.push(key);
			}
		}
	}

	// Create a table.
	var table = document.createElement("table");
	table.id = "ASCIItable"
	// Create table header row using the extracted headers above.
	var tr = table.insertRow(-1);                   // table row.
	
	for (var i = 0; i < col.length; i++) {
		var th = document.createElement("th");      // table header.
		th.innerHTML = col[i];
		tr.appendChild(th);
	}

	// add json data to the table as rows.
	for (var i = 0; i < ASCII.length; i++) {

		tr = table.insertRow(-1);

		for (var j = 0; j < col.length; j++) {
			var tabCell = tr.insertCell(-1);
			tabCell.innerHTML = ASCII[i][col[j]];
		}
	}

	// Now, add the newly created table with json data, to a container.
	var divShowData = document.getElementById('showData');
	divShowData.innerHTML = "";
	divShowData.appendChild(table);
	
 }