setTimeout(() => { TimeoutHelper(); }, 1000 );

function TimeoutHelper() {	
	//console.log
}

// dodawanie onclick
window.frames["mainFrame"].document.getElementById('Refresh').onclick = CalculateUnit;

function CalculateUnit() {
	setTimeout(() => {  CalculateUnitHelper(); console.log("Przeliczono"); }, 1000 );
}

function CalculateUnitHelper() {
	var allTable = window.frames["mainFrame"].document.getElementById('autoWidth');
	var dataTable = allTable.getElementsByTagName('table');

	for(i = 2; i < dataTable[0].rows.length; i++) {
		var cellValue = dataTable[0].rows[i].cells[2].innerHTML;
		var unit = "";
		if(cellValue > 10e8) {
			cellValue /= 10e8;
			unit = "GB";
		}
		else if(cellValue > 10e5) {
			cellValue /= 10e5;
			unit = "MB";
		}
		else if(cellValue > 10e2) {
			cellValue /= 10e2;
			unit = "KB";
		}
		cellValue = (Math.round(cellValue * 100) / 100) + " " + unit;
		console.log(cellValue);
		dataTable[0].rows[i].cells[2].innerHTML = cellValue;
	}
	
	// przywracanie onclick po odświeżeniu
	window.frames["mainFrame"].document.getElementById('Refresh').onclick = CalculateUnit;
	
	setTimeout(() => { TimeoutHelper(); }, 1000 );
}