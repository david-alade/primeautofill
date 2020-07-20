chrome.storage.local.get('status', function(data) {
    console.log(data.status);
    if (data.status) {
        chrome.storage.local.get('CNumber', function(data) {
			console.log(data.CNumber);
	  		fill('number', data.CNumber);
	  		});

	  		chrome.storage.local.get('cardName', function(data) {
			console.log(data.cardName);
	  		fill('name', data.cardName);
	  		});

	  		chrome.storage.local.get('expDate', function(data) {
			console.log(data.expDate);
	  		fill('expiry', data.expDate);
	  		});

	  		chrome.storage.local.get('securityCode', function(data) {
			console.log(data.securityCode);
	  		fill('verification_value', data.securityCode);
			  });
			}
});


function fill(elementId, assignment) {
	let element = document.getElementById(elementId);
	if (element != null) {
        element.focus();
		element.value = assignment;
        console.log("successfully filled");
        element.blur();
	}
} 