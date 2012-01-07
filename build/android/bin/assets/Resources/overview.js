
var window_overzicht = Ti.UI.createWindow({
  backgroundColor : "#333",
  title: 'Overzicht problemen'
  //navBarHidden:true,
  //fullscreen: true
});

var view_overzicht = Ti.UI.createView();
var view_overzichtLoading = Ti.UI.createView({
	//visible:false
});

var lbl_loading = Ti.UI.createLabel({
	text:'Loading problems'
});

var img_loading = Ti.UI.createImageView({
	image:'img/KS_nav_ui.png',
	height:46,
	width:43
})

view_overzichtLoading.add(lbl_loading);
view_overzichtLoading.add(img_loading);
view_overzicht.add(view_overzichtLoading);

var tableview_overzicht = Titanium.UI.createTableView();

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
	var doc = this.responseXML.documentElement;		
	var elements = doc.getElementsByTagName("title");
	
	view_overzichtLoading.visible = false;
		
	for(i = 0 ; i < elements.length ; i++)
	{
		var title = elements.item(i);
		
		tableview_overzicht.appendRow(Ti.UI.createTableViewRow({hasChild: true, title: '' + title.text}));
		
	}
};

xhr.open('GET','http://less-problems.webatu.com/api/views/problems.xml');
xhr.send();

view_overzicht.add(tableview_overzicht);
window_overzicht.add(view_overzicht);