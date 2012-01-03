var mainWindow = Titanium.UI.createWindow({
	title:'Less problems'
});

var nav = Titanium.UI.createView({
	layout:'horizontal',
	top:0,
	left:0,
	backgroundColor:'#fff',
	height:25,
	zIndex:1
});

var container = Titanium.UI.createView({
	top:0
});

var btnOverzicht = Titanium.UI.createButton({
	title:'Overzicht',
	height:35
});

var btnProbleemToevoegen = Titanium.UI.createButton({
	title:'Probleem toevoegen',
	height:35
});

nav.add(btnOverzicht);
nav.add(btnProbleemToevoegen);

var overzichtView = Titanium.UI.createView({
	backgroundColor:'#aaa',
});

var toevoegView = Titanium.UI.createView({
	backgroundColor:'#555',
	layout:'vertical'
});

btnOverzicht.addEventListener('click', function(e){
	container.remove(container.children[0]);
	container.add(overzichtView);
});

btnProbleemToevoegen.addEventListener('click', function(e){
	container.remove(container.children[0]);
	container.add(toevoegView);
});

var lblOverzicht = Titanium.UI.createLabel({
	text:'Overzicht',
	color:'#000'
});

var lblProbleemToevoegen = Titanium.UI.createLabel({
	text:'Probleem toevoegen',
	color:'#000'
});

toevoegView.add(lblProbleemToevoegen);
overzichtView.add(lblOverzicht);

mainWindow.open({ fullscreen:true });
mainWindow.add(nav);
mainWindow.add(container);
container.add(overzichtView);





//Titel
//Lokaal
//Beschrijving

var HTitel = Titanium.UI.createView({
	layout:'horizontal',
	left: 25,
	right: 25
});

var lblTitel = Titanium.UI.createLabel({
	text:'Titel: '
});

var txtTitel = Titanium.UI.createTextField({
	width:'75%'
});

HTitel.add(lblTitel);
HTitel.add(txtTitel);
toevoegView.add(HTitel);



var HLokaal = Titanium.UI.createView({
	layout:'horizontal',
	left:25,
	right:25
});

var lblLokaal = Titanium.UI.createLabel({
	text:'Lokaal: '
});

var txtLokaal = Titanium.UI.createTextField({
	width:'75%'
});

HLokaal.add(lblLokaal);
HLokaal.add(txtLokaal);
toevoegView.add(HLokaal);

var lblBeschrijving = Titanium.UI.createLabel({
	text:'Beschrijving:'
});

var txtAreaBeschrijving = Titanium.UI.createTextArea({
	width: '100%',
	height: '100%'
});

toevoegView.add(lblBeschrijving);
toevoegView.add(txtAreaBeschrijving);
