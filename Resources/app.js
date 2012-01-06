Titanium.UI.setBackgroundColor('#cccccc');  

var forms = require('lib/forms');

//-- Window Overzicht
var window_overzicht = Ti.UI.createWindow({
  backgroundColor : "#333",
  color: "#FFF",
  navBarHidden:true,
  layout:'vertical'
});

var overzichtView = Ti.UI.createView({
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

var tabelData = [];
var tabel = Ti.UI.createTableView({
	data : tabelData,
	height:'100%',
	width:'100%'
});

var updateKnop = Ti.UI.createButton({
	title : 'Update overview'
})

updateKnop.addEventListener('click', loadOverview);
overzichtView.add(updateKnop);

function loadOverview(){
	
	tabelData = [];
		
var xhr = Titanium.Network.createHTTPClient();



xhr.onload = function(e){
	var doc = this.responseXML.documentElement;
	

    var elements = doc.getElementsByTagName("vid");

	for(i = 0 ; i < elements.length ; i++){
		
		try{
		var t = i;
		var titel = doc.getElementsByTagName("title").item(i).text;
		var lokaal = doc.getElementsByTagName("value").item((t*2+1)).text;
		
		var lblLokaal = Ti.UI.createLabel({
			text : lokaal,
			right:5,
			top: -20
		});
		
		var lblTitel = Ti.UI.createLabel({
			text : titel,
			left:5
		});
		
		var rij = Ti.UI.createTableViewRow({
			layout:'vertical',
			height:25
		});
		
		rij.add(lblTitel);
		rij.add(lblLokaal);
		tabelData.push(rij);
	
		}catch (ex){
		
		}
						
	}
	tabel.setData(tabelData);
	overzichtView.add(tabel);
	tabel.show();
	
}

xhr.open('GET', 'http://less-problems.webatu.com/api/views/problems.xml');
xhr.send();
}

loadOverview();

window_overzicht.add(overzichtView);
overzichtView.add(label1);


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

label1.addEventListener('click', function(e){
	label1.text="klik";
	loadOverview();
});

navigation.addTab(tab_overzicht);
navigation.addTab(tab_probleem);

navigation.open();