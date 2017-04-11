
function chopScreen() {
	var myContainer = document.getElementById("the-animation-box");
	var myColumn;
	myContainer.innerHTML = "";
	for (var i = 0; i < 30; i++) {
		myContainer.innerHTML = "<div class='column'></div>" + myContainer.innerHTML;
		myColumn = myContainer.firstChild;
		myColumn.innerHTML = "";
		myColumn.id = "column" + i;
		for (var j = 0; j < 30; j++) {
			myColumn.innerHTML = 	"<div class='dot'></div>" + myColumn.innerHTML;
			myColumn.firstChild.innerHTML = "";
			myColumn.firstChild.id = "dot" + i + "-" + j;
			myColumn.firstChild.className = "dot row" + j;

		}
	}
}

window.onload = chopScreen();
