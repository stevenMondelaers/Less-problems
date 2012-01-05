Titanium.UI.setBackgroundColor('#cccccc');  

var forms = require('forms');

//-- Window Overzicht
var window_overzicht = Ti.UI.createWindow({
  backgroundColor : "#333",
  color: "#FFF",
  navBarHidden:true,
  layout:'vertical'
});

var overzicht_scrollView = Ti.UI.createScrollView({
	layout:'vertical'
})

var label1 = Ti.UI.createLabel({
  text:"Hier komt het overzicht",
  top: 20,
  width: "80%",
  height: 40,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
});

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function(e){
	var doc = this.responseXML.documentElement;
	
	var elements = doc.getChildNodes;
	label1.text = elements.length;
			
	for(var i=0; i<elements.length;i++){
		var item = elements.item(i);
		if(i == 0){
			var lblTitel = Ti.UI.createLabel({
			text:item.getElementsByTagName('title').text,
			left:0
		})
		overzicht_scrollView.add(lblTitel);			
		}
		
	}
}

xhr.open('GET', 'http://less-problems.webatu.com/api/views/problems.xml');
xhr.send();

window_overzicht.add(overzicht_scrollView);
overzicht_scrollView.add(label1);


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
