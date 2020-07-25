chrome.storage.local.set({access: false}, function() { //cnumber
	console.log("No access");
});
let inputs = document.getElementsByTagName('input');


let successfulSaves = 0;

let saveSettings = document.getElementById("saveSettings");
saveSettings.addEventListener("click", function() {
	successfulSaves = 0;
	document.getElementById('success').style.display = 'none';
	document.getElementById('failure').style.display = 'none';
	chrome.storage.local.set({CNumber: inputs[0].value}, function() { //cnumber
		if (inputs[0].value != '') {
			successfulSaves++;
		}
	});
	
	chrome.storage.local.set({cardName: inputs[1].value}, function() { //card name
		if (inputs[1].value != '') {
			successfulSaves++;
		}
    });

    chrome.storage.local.set({expDate: inputs[2].value}, function() { //exp date
      if (inputs[2].value != '') {
			successfulSaves++;
		}
    });

    chrome.storage.local.set({securityCode: inputs[3].value}, function() { //security code
      if (inputs[3].value != '') {
			successfulSaves++;
		}
    });

    chrome.storage.local.set({email: inputs[4].value}, function() { //email
      if (inputs[4].value != '') {
			successfulSaves++;
		}
    });

    chrome.storage.local.set({fname: inputs[5].value}, function() { //fname
      if (inputs[5].value != '') {
			successfulSaves++;
		}
    });

    chrome.storage.local.set({lname: inputs[6].value}, function() { //lname
      if (inputs[6].value != '') {
			successfulSaves++;
		}
    });

    chrome.storage.local.set({address: inputs[7].value}, function() { //address
      if (inputs[7].value != '') {
			successfulSaves++;
		}
    });

    chrome.storage.local.set({aptNumber: inputs[8].value}, function() { //apt
      if (inputs[8].value != '') {
			successfulSaves++;
			successfulSaves++;
		}
    });
	

    chrome.storage.local.set({city: inputs[9].value}, function() { //city
      if (inputs[9].value != '') {
			successfulSaves++;
		}
    });

    chrome.storage.local.set({zipCode: inputs[10].value}, function() { //zip code
      if (inputs[10].value != '') {
			successfulSaves++;
		}
    });

    chrome.storage.local.set({phoneNumber: inputs[11].value}, function() { //phone number
      if (inputs[11].value != '') {
			successfulSaves++;
		}
		console.log(successfulSaves);
	  
		if (successfulSaves == 11 || successfulSaves == 13){
			console.log("Everything saved");
			document.getElementById("success").style.display = 'block';
			//FILL IN HERE
		}
		else {
			console.log("Something went wrong!");
			document.getElementById("failure").style.display = 'block';
		}

    });

});


