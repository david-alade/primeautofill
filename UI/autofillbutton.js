// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let toggleStatus = document.getElementById('toggleStatus');
let options = document.getElementById('options');
console.log("is this shit even running?");

chrome.storage.local.get('status', function(data) {
		if (data.status) {
  		toggleStatus.innerHTML = "Autofill <br> <span style ='color:green';> On </span>";
		}
		else {
  		toggleStatus.innerHTML = "Autofill <br> <span style ='color:red';> Off </span>";
		}
  	});

let testing = document.getElementById("toggleStatus");
testing.addEventListener("click", function() {
	console.log("clicked");
	chrome.storage.local.get('status', function(data) {
		if (data.status) {
			chrome.storage.local.set({status: false});
  		toggleStatus.innerHTML = "Autofill <br> <span style ='color:red';> Off </span>";
  		// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

  		// 	chrome.tabs.sendMessage(tabs[0].id, {alert: "turnOff"});
	   //  });
		}
		else {
			chrome.storage.local.set({status: true});
  		toggleStatus.innerHTML = "Autofill <br> <span style ='color:green';> On </span>";
		}
  	});
});


//checkout_shipping_address_first_name
//checkout_shipping_address_last_name
//checkout_shipping_address_address1
//checkout_shipping_address_address2 (apt stuff)
//checkout_shipping_address_city
//checkout_shipping_address_zip
//checkout_shipping_address_phone
//checkout_email
//number
//name
//expiry
//verification_value



  		// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

  		// 	chrome.tabs.sendMessage(tabs[0].id, {alert: "changeName"});
	   //  });