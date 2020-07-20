/*
chrome.storage.local.get('status', function (data) {
    console.log(data.status);
    if (data.status) {

        chrome.storage.local.get('email', function (data) {
            console.log(data.email);
            fillIn('email',data.email);
        });
        chrome.storage.local.get('fName','lName', function (data) {
            console.log(data.fName);
            console.log(data.lName)
            fillIn('name',`${data.fName} ${profile.lName}`);
        });
        chrome.storage.local.get('fName','lName', function (data) {
            console.log(data.fName);
            console.log(data.lName)
            fillIn('fullName',`${data.fName} ${profile.lName}`);
        });
        chrome.storage.local.get('fName', function (data) {
            console.log(data.fName);
            fillIn('first-name', data.fName);
        });
        chrome.storage.local.get('fName', function (data) {
            console.log(data.fName);
            fillIn('firstname', data.fName);
        });
        chrome.storage.local.get('fName', function (data) {
            console.log(data.fName);
            fillIn('firstName', data.fName);
        });
        chrome.storage.local.get('lName', function (data) {
            console.log(data.lName);
            fillIn('last-name', data.lName);
        });
        chrome.storage.local.get('lName', function (data) {
            console.log(data.lName);
            fillIn('lastname', data.lName);
        });
        chrome.storage.local.get('lName', function (data) {
            console.log(data.lName);
            fillIn('lastName', data.lName);
        });
        chrome.storage.local.get('phoneNumber', function (data) {
            console.log(data.phoneNumber);
            fillIn('tel', data.phoneNumber);
        });
        chrome.storage.local.get('address', function (data) {
            console.log(data.address);
            fillIn('address-line1', data.address);
        });
        chrome.storage.local.get('city', function (data) {
            console.log(data.city);
            fillIn('address-level2', data.city);
        });
        chrome.storage.local.get('city', function (data) {
            console.log(data.city);
            fillIn('address-level2', data.city);
        });
        chrome.storage.local.get('city', function (data) {
            console.log(data.city);
            fillIn('city', data.city);
        });
        chrome.storage.local.get('city', function (data) {
            console.log(data.city);
            fillIn('city', data.city);
        });
        chrome.storage.local.get('zipCode', function (data) {
            console.log(data.zipCode);
            fillIn('postal-code', data.zipCode);
        });
        chrome.storage.local.get('zipCode', function (data) {
            console.log(data.zipCode);
            fillIn('zipcode', data.zipCode);
        });
        chrome.storage.local.get('zipCode', function (data) {
            console.log(data.zipCode);
            fillIn('postcode', data.zipCode);
        });
        chrome.storage.local.get('zipCode', function (data) {
            console.log(data.zipCode);
            fillIn('post-code', data.zipCode);
        });
        chrome.storage.local.get('zipCode', function (data) {
            console.log(data.zipCode);
            fillIn('billingPostalCode', data.zipCode);
        });
        
    }

});

function fillById(elementId, assignment) {
	let element = document.getElementById(elementId);
	if (element != null) {
        fill(element,assignment);
	}
}
function fillByName(elementID,assignment)
{
    let element = document.getElementsByName(name);
    if(element)
    {
        fill(element,assignment);
    }
}
function fillByAutocomplete(elementID,assignment)
{
    let elements = document.querySelectorAll('[autocomplete=${name}]');

    elements.forEach(function(element) {
        fill(element,assignment);
    });
}

function fill(element,value)
{
    element.focus();
    element.value = value;
    element.blur();
}

function fillIn(element,assignment)
{
    fillByAutocomplete(name,assignment);
    fillByName(element,assignment);
    fillById(element,assignment);
}
*/