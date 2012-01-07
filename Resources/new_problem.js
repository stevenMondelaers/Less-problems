
var forms = require('lib/forms');

var fields = [
	{ title:'Probleem', type:'text', id:'probleem' },
	{ title:'Beschrijving', type:'text', id:'beschrijving' },
	{ title:'Locatie', type:'picker', id:'locatie', data: [
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

form.addEventListener('registerProblem', function(e) {
	alert(e.values);
});

window_probleem.add(form);