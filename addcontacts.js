window.onload=function()
{
		document.addEventListener("deviceready"), onDeviceReady, false);
		
}

function onDeviceReady()
{
	document.getElementById('btnSave').addEventListener('click', saveContact, false);
}

function saveContact()
{
	var firstName = document.getElementById("first").value;
	var lastName = document.getElementById("last").value;
	var telephoneNumber = document.getElementById("number").value;
	var phoneType = document.getElementById("type").value;
	
	var cntContact = navigator.contacts.create();
	cntContact.name.givenName = firstName;
	cntContact.name.familyName = lastName;
	var phoneNumbers = [];
	phoneNumbers[0] = new ContactField(phoneType, telephoneNumber, false);
	cntContact.phoneNumbers = phoneNumbers;
	
	cntContact.save();
	
}
