
chrome.storage.local.get('status', function(data) {
	console.log(data.status);
		if (data.status) {
			chrome.storage.local.get('fname', function(data) {
			console.log(data.fname);
	  		fill('checkout_shipping_address_first_name', data.fname);
	  		});

	  		chrome.storage.local.get('lname', function(data) {
			console.log(data.lname);
	  		fill('checkout_shipping_address_last_name', data.lname);
	  		});

	  		chrome.storage.local.get('address', function(data) {
			console.log(data.address);
	  		fill('checkout_shipping_address_address1', data.address);
	  		});

	  		chrome.storage.local.get('aptNumber', function(data) {
			console.log(data.aptNumber);
	  		fill('checkout_shipping_address_address2', data.aptNumber);
	  		});

	  		chrome.storage.local.get('city', function(data) {
			console.log(data.city);
	  		fill('checkout_shipping_address_city', data.city);
	  		});

	  		chrome.storage.local.get('zipCode', function(data) {
			console.log(data.zipCode);
	  		fill('checkout_shipping_address_zip', data.zipCode);
	  		});

	  		chrome.storage.local.get('phoneNumber', function(data) {
			console.log(data.phoneNumber);
	  		fill('checkout_shipping_address_phone', data.phoneNumber);
			});

	  		chrome.storage.local.get('email', function(data) {
			console.log(data.email);
	  		fill('checkout_email', data.email);
			  });
			
		}
  	});

function fill(elementId, assignment) {
	let element = document.getElementById(elementId);
	if (element != null) {
		element.value = assignment;
		console.log("successfully filled");
	}
}
/*

function continueToNextStep() {
	let continueButton = document.querySelector('.step__footer__continue-btn');
	continueButton.click();
}
*/