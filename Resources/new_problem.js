
var forms = require('lib/forms');

var fields = [
	{ title:'Probleem', type:'text', id:'txtTitel' },
	{ title:'Beschrijving', type:'textarea', id:'txtBeschrijving' },
	{ title:'Locatie', type:'picker', id:'txtLocatie', data: [
		'Kruidtuin', 'De Vest', 'Nog iets anders'
	] },
	{ title:'Submit', type:'submit', id:'registerProblem' }
];

var window_probleem = Ti.UI.createWindow({  
    backgroundColor:'#fff',
    title: 'Probleem toevoegen'
    //navBarHidden:true,
    //fullscreen: true
});

var form = forms.createForm({
	style: forms.STYLE_LABEL,
	fields: fields
});

window_probleem.add(form);

form.addEventListener( 'registerProblem', function( e ) {
	
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onerror = function(e) {
		alert("ERROR " + e.error);
		Titanium.API.info("IN ERROR: " + e.error);
	};

	xhr.onload = function(e) {
		Titanium.API.info('IN ONLOAD');
		Titanium.API.info('(' + this.responseText + ')');
		Titanium.API.info("status: " + this.status + "readyState " + this.readyState);

	};
	
	var jsonString = '{"node":{"type":"probleem","title":"'+ e.values.txtTitel.toString() +'","body":{"und":{"0":{"value":"'+ e.values.txtBeschrijving.toString() +'"}}},"field_lokaal":{"und":{"0":{"value":"'+ e.values.txtLocatie.toString() +'"}}}}}';

	xhr.open("POST", "http://less-problems.webatu.com/api/node");
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xhr.send(jsonString);
	
});



/*
var txtTitel = Ti.UI.createTextField({
	hintText : 'Probleem',
	top: 5,
	left: 10,
	width: '75%'
});

var txtLocatie = Ti.UI.createTextField({
	hintText : 'Locatie',
	width: '75%'
});

var txtBeschrijving = Ti.UI.createTextField({
	hintText : 'Beschrijving',
	width: '75%'
});

var window_probleem = Ti.UI.createWindow({
	backgroundColor : '#fff',
	title : 'Probleem toevoegen'
});

var btnSubmit = Ti.UI.createButton({
	title : 'Submit',
	width: 50,
	height: 10,
	top: 80,
	left: 10
});

window_probleem.add(txtTitel);
window_probleem.add(txtLocatie);
window_probleem.add(txtBeschrijving);
window_probleem.add(btnSubmit);

btnSubmit.addEventListener('click', function(e) {
	
	txtTitel.blur();
	txtLocatie.blur();
	txtBeschrijving.blur();
	
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onerror = function(e) {
		alert("ERROR " + e.error);
		Titanium.API.info("IN ERROR: " + e.error);
	};

	xhr.onload = function(e) {
		Titanium.API.info('IN ONLOAD');
		Titanium.API.info('(' + this.responseText + ')');
		Titanium.API.info("status: " + this.status + "readyState " + this.readyState);
		
		txtTitel.value = "";
		txtLocatie.value = "";
		txtBeschrijving.value = "";

	};
	
	var jsonString = '{"node":{"type":"probleem","title":"'+txtTitel.value+'","body":{"und":{"0":{"value":"'+ txtBeschrijving.value +'"}}},"field_lokaal":{"und":{"0":{"value":"'+ txtLocatie.value +'"}}}}}';

	xhr.open("POST", "http://less-problems.webatu.com/api/node");
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xhr.send(jsonString);
	
});

*/
