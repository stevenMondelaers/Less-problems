var txtTitel = Ti.UI.createTextField({
	hintText : 'Probleem',
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
	title : 'Probleem toevoegen',
	layout: 'vertical'
	//navBarHidden:true,
	//fullscreen: true
});

var btnSubmit = Ti.UI.createButton({
	title : 'Submit'
})

window_probleem.add(txtTitel);
window_probleem.add(txtLocatie);
window_probleem.add(txtBeschrijving);
window_probleem.add(btnSubmit);


btnSubmit.addEventListener('click', function(e) {
	// Doe iets
});
