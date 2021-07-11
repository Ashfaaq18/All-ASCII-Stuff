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