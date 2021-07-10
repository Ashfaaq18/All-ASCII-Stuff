
var content = document.querySelector('link[rel="import"]').import;

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