window.onload = function refreshFill() {
	chrome.storage.local.get('status', function(data) {
		console.log(data.status);
		if (data.status) {
			chrome.storage.local.get('email', function (data) {
				console.log(data.email);
				fill('email', data.email);
			});
			chrome.storage.local.get('CNumber', function (data) {
				console.log(data.CNumber);
				fill('cardNumber', data.CNumber);
			});
			chrome.storage.local.get('zipCode', function (data) {
				console.log(data.zipCode);
				fill('billingPostalCode', data.zipCode);
			});
			chrome.storage.local.get('expDate', function (data) {
				console.log(data.expDate);
				fill('cardExpiry', data.expDate);
			});
			chrome.storage.local.get('securityCode', function (data) {
				console.log(data.securityCode);
				fill('cardCvc', data.securityCode);
			});
			chrome.storage.local.get('cardName', function (data) {
				console.log(data.cardName);
				fill('billingName', data.cardName);
			});
		}
	});

	function fill(elementId, assignment) {
		let element = document.getElementById(elementId);
		console.log(element);
		if (element != null) {
			element.focus();
			element.value = assignment;
			console.log("successfully filled");
			element.blur();
		}
	} 
}
