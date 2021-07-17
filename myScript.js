/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//ASCIIcontrolData 'showControlData'
function tableFromJson(JSONdata, elementID) {
	// the json data. (you can change the values for output.)
	var ASCIIdata = JSONdata;

	// Extract value from table header. 
	// ('Dec', 'Char', and 'Desc')
	var col = [];
	for (var i = 0; i < ASCIIdata.length; i++) {
		for (var key in ASCIIdata[i]) {
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
	
	var colSize = col.length;
	var rowSize = ASCIIdata.length;
	if(elementID === "showPrintableData"){
		colSize = colSize*2;
		rowSize = rowSize/2;
	}
	
	for (var i = 0; i < colSize; i++) {
		var th = document.createElement("th");      // table header.
		
		if(i > col.length-1){						// wrap the table for printable section.
			th.innerHTML = col[i-(colSize-col.length)];  
		}
		else{
			th.innerHTML = col[i];
		}
		
		tr.appendChild(th);
	}
	
	
	// add json data to the table as rows.
	for (var i = 0; i < rowSize; i++) {

		tr = table.insertRow(-1);

		for (var j = 0; j < colSize; j++) {
			var tabCell = tr.insertCell(-1);
			
			if(j > col.length-1){						// wrap the table.
				tabCell.innerHTML = ASCIIdata[i+(ASCIIdata.length-rowSize)][col[j-(colSize-col.length)]];
				tabCell.style.textAlign = "center";
			}
			else{
				tabCell.innerHTML = ASCIIdata[i][col[j]];
				if( ((j+1)%3) != 0 ){
				tabCell.style.textAlign = "center";
				}
			}
		}
	}

	// Now, add the newly created table with json data, to a container.
	var divShowData = document.getElementById(elementID);
	divShowData.innerHTML = "";
	divShowData.appendChild(table);
	
 }