
var window_overzicht = Ti.UI.createWindow({
  backgroundColor : "#333",
  title: 'Overzicht problemen'
  //navBarHidden:true,
  //fullscreen: true
});

var view_overzicht = Ti.UI.createView();
var view_overzichtLoading = Ti.UI.createView();

var lbl_loading = Ti.UI.createLabel({
	text:'Loading problems'
});

view_overzichtLoading.add(lbl_loading);
view_overzicht.add(view_overzichtLoading);

var tableview_overzicht = Titanium.UI.createTableView();

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
	tableview_overzicht.visible = false;
	view_overzichtLoading.visible = true;
	
	var doc = this.responseXML.documentElement;		
	var elements = doc.getElementsByTagName("title");
	
	tableview_overzicht.visible = true;
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