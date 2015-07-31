console.log('Loading global variables.');

// create array for storage of items and get necessary pre-defined elements
var logList = [];
var newEntryForm = document.getElementById('newEntryForm');
var log = document.getElementById('log');
// create blank variables so we can check on various conditions later
var newEntryCheck = true;
var savedCheck = true;

console.log('Global variables successfully loaded.');
console.log('Loading global functions.');

// function for new entries and refreshing
function refresh() {
	// if the entry box isn't empty and this is a new entry, add the new entry to the list and reset the box before refreshing
	// whatever the case, we refresh the list checking
	if (newEntryForm.entry.value !== '' && newEntryCheck === true) {
		log.removeAttribute('class', 'hidden');
		logList.push(newEntryForm.entry.value);
	}
	// clear out all the old stuff in the log
	log.innerHTML = '';

	// create a new entry for each item in the list of entries and a divider to follow it
	for (var i = 0; i < logList.length; i++) {
		var newItm = document.createElement('div');
		var txt = document.createElement('span');
		var divider = document.createElement('div');
		// give each entry an id based on its position in the list array so we can find it and do stuff to it later
		txt.innerHTML = logList[i];
		newItm.setAttribute('id', 'item' + i);
		txt.setAttribute('class', 'text')
		txt.setAttribute('id', 'itemText' + i);
		divider.setAttribute('class', 'divider');
		newItm.innerHTML = '<input type = "checkbox" id = "completed' + i + '"/><input type = "button" class = "button" id = "delete' + i + '" onClick = "deleteEntry(' + i + ')" value = "Delete"/><input type = "button" class = "button" id = "edit' + i + '" onClick = "editEntry(' + i + ')" value = "Edit"/>';
		// stick everything together and add the new entry to the log
		newItm.appendChild(txt);
		log.appendChild(newItm);
		// if this is the last entry to be created, we don't need a divider
		if (logList.length !== 1 && i < logList.length - 1) {
			log.appendChild(divider);
		}
	};

	newEntryForm.entry.value = '';
	newEntryForm.entry.focus();
}

// function for deleting entries based on id of the "delete" button we clicked
function deleteEntry(itmNum) {
	// cut out the desrired entry and refresh so we can see our changes
	logList.splice(itmNum, 1);
	newEntryCheck = false;
	refresh();
	newEntryCheck = true;

	if (logList.length !== 0) {
		log.removeAttribute('class', 'hidden');
	} else {
		log.setAttribute('class', 'hidden');
	}
}

// function for editing entries based on id of the "edit" button we clicked
function editEntry(itmNum) {
	// get the item we're going to edit and reset it to the "edit panel"
	var itm = document.getElementById('item' + itmNum),
		itmTxt = itm.lastChild.innerHTML;
	itm.innerHTML = '<input type = "button" class = "button" id = "editDone' + itmNum + '" onClick = "editDone(' + itmNum + ')" value = "Done"/><br></br><input type = "text" id = "edit' + itmNum + '" onSubmit="editDone(' + itmNum + '); return false;" value = "' + itmTxt + '"/>';
	document.getElementById('edit' + itmNum).focus();
}

// function for refreshing the log after editing an entry
function editDone(itmNum) {
	// insert the change we made into the list of entries and refresh
	var itm = document.getElementById('item' + itmNum),
		itmTxt = itm.lastChild.value;
	if (itmTxt === '') {
		alert('Your log must have content.');
		refresh();
		editEntry(itmNum);
	} else {
		logList[itmNum] = itmTxt;
		newEntryCheck = false;
		refresh();
	}
}

// function to reset entire log
function clearLog() {
	var clearCheck = confirm('Are you sure you want to clear your log?')

	if (clearCheck === true) {
		logList = [];
		log.innerHTML = '';
		log.setAttribute('class', 'hidden');
	}
}

console.log('Global functions successfully loaded.')
console.log('Initiating startup functions.')

// event listeners
var input = document.getElementById('btn_newEntry');
input.addEventListener('click', function () {
	if (newEntryForm.entry.value === '') {
		alert('You must enter something to create a new log.');
		newEntryForm.entry.focus();
	} else {
		newEntryCheck === true
		refresh();
	}
});

var clear = document.getElementById('btn_clearLog');
clear.addEventListener('click', clearLog);

// misc (edge casing)
newEntryForm.entry.value = '';
newEntryForm.entry.focus();
log.setAttribute('class', 'hidden');

console.log('Startup functions successfully completed.')

setTimeout(function() {
	document.getElementById('loading').setAttribute('class', 'hidden');
}, 3000);