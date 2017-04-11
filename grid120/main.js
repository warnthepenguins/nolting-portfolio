
// function slowlyShrink() {
// 	myDot.style.borderRadius = "100%";
// 	myDot.style.transition = "border-radius 10s ease-in";
// }

// function callMeMaybe(column, row) {   
// 	// highlight the mouseover target
// 	// document.getElementById("wrapper").style.visibility = "hidden";
// 	//this.style.visibility = "hidden";
// 	if (ready == true) {
// 		console.log("ready");
// 		console.log(i + " " + j + "\n");
// 		document.getElementById("dot" + column + "-" + row).setAttribute("style","background: red;");
// 	}
// }

function flipColumns() {
	var myContainer = document.getElementById("wrapper");
	//alert (myContainer.className.match ( /(?:^|\s)tick(?!\S)/ ) == " tick");
	if (myContainer.className.match ( /(?:^|\s)tick(?!\S)/ )) {
		//alert (myContainer.className);
		myContainer.className = myContainer.className.replace ( /(?:^|\s)tick(?!\S)/g , " tock");
	} else {
		myContainer.className = myContainer.className.replace ( /(?:^|\s)tock(?!\S)/g , " tick");
	}
}

function chopScreen() {
	var myContainer = document.getElementById("wrapper");
	var myColumn;
	myContainer.innerHTML = "";
	// myContainer.style.opacity = "1";
	// myContainer.style.transition = "opacity 1s ease-in";
	for (var i = 0; i < 30; i++) {
		myContainer.innerHTML = "<div class='column'></div>" + myContainer.innerHTML;
		myColumn = myContainer.firstChild;
		myColumn.innerHTML = "";
		myColumn.id = "column" + i;
		for (var j = 0; j < 30; j++) {
			myColumn.innerHTML = "<div class='dot'></div>" + myColumn.innerHTML;
			myColumn.firstChild.innerHTML = "";
			myColumn.firstChild.id = "dot" + i + "-" + j;
			myColumn.firstChild.className = "dot row" + j;
			// myColumn.firstChild.addEventListener("mouseover", function() {callMeMaybe(i,j);});
			// console.log(myColumn.firstChild.innerHTML);
		}
	}
}

var ready = false;
window.onload = chopScreen();
window.setInterval(flipColumns, 1200);
window.setTimeout(function(){ready=true}, 1000);

// function makeOpaque(whichColumn, whichRow) {
// 	console.log(document.getElementById("dot" + whichColumn + "-" + whichRow).id);
// 	//document.getElementById("dot" + whichColumn + "-" + whichRow).style.opacity = "1";
// }

 // function dimNeighbors(whichColumn, whichRow, whatRadius) {
 // 	var myNeighbors = [];
 // 	var radx = whatRadius * -1;
 // 	var rady = radx;

 // 	console.log(whichColumn + " s " + whichRow);
	// if (whichColumn > 1 && whichColumn < 29 && whichRow > 1 && whichRow < 29) {
	// 	do {
	// 		myNeighbors.push([]);
	// 		do {
	// 			myNeighbors[radx + whatRadius].push(document.getElementById("dot" + (whichColumn + radx) + "-" + (whichRow + rady)));
	// 			if (radx * rady + radx + rady) {
	// 				// console.log("dot" + (whichColumn + radx) + "-" + (whichRow + rady));
	// 				myNeighbors[radx + whatRadius][rady + whatRadius].style.opacity = "0.5";
	// 				setTimeout(makeOpaque(whichColumn + radx, whichRow + rady),500);
	// 				// myNeighbors[radx + whatRadius][rady + whatRadius].style.transition = "opacity 10ms ease-out";
	// 			}
	// 		} while (rady++ < whatRadius);
	// 		rady = whatRadius * -1;
	// 	} while (radx++ < whatRadius);
	// 	// console.log("0000");
	//  }

		// for (var i = -1; i <= 1; i++) {
		// 	for (var j = -1; j <= 1; j++) {
		// 		myNeighbors[i + 1][j + 1] = document.getElementById("dot" + (whichColumn + i) + "-" + (whichRow + j));
		// // 		if (i ^ 2 + j ^ 2 != 0) {
		// // 			myNeighbors[i][j].style.opacity="0.5";
		// // 			myNeighbors[i][j].style.transition="opacity 3s 0.25s ease-out";
		// // 		}
		// 	}
		// }
// }

// function dimTweens(whichColumn, whichRow, howMany) {
// 	// lastColumn = whichColumn;
// 	// lastRow = whichRow;
// }
