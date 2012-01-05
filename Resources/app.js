Titanium.UI.setBackgroundColor('#cccccc');  

var forms = require('forms');

//-- Window Overzicht
var window_overzicht = Ti.UI.createWindow({
  backgroundColor : "333",
  color: "#FFF"
});

var label1 = Ti.UI.createLabel({
  text:"Hier komt het overzicht",
  top: 20,
  width: "80%",
  height: 40,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
});

window_overzicht.add(label1);

//-- Window Probleem
var fields = [
	{ title:'Probleem', type:'text', id:'probleem' },
	{ title:'Beschrijving', type:'text', id:'beschrijving' },
	{ title:'Locatie', type:'picker', id:'locatie', data: [
		'Kruidtuin', 'De Vest', 'Nog iets anders'
	] },
	{ title:'Submit', type:'submit', id:'registerProblem' }
];

var window_probleem = Ti.UI.createWindow({  
    title:'Less Problems',
    backgroundColor:'#fff'  
});

var form = forms.createForm({
	style: forms.STYLE_LABEL,
	fields: fields
});

form.addEventListener('registerProblem', function(e) {
	Ti.API.debug(e);
	alert(e.values);
});

window_probleem.add(form);

//-- Tab Group
var navigation = Titanium.UI.createTabGroup();

var tab_overzicht = Titanium.UI.createTab({
    title:'Overzicht',
    window: window_overzicht
});

var tab_probleem = Titanium.UI.createTab({
    title:'Nieuw',
    window: window_probleem
});

navigation.addTab(tab_overzicht);
navigation.addTab(tab_probleem);

navigation.open();
