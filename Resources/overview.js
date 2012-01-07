
var window_overzicht = Ti.UI.createWindow({
  backgroundColor : "#fff",
  title: 'Overzicht problemen'
  //navBarHidden:true,
  //fullscreen: true
});

var view_overzicht = Ti.UI.createView();

var tableview_overzicht = Titanium.UI.createTableView();

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
	var doc = this.responseXML.documentElement;		
	var elements = doc.getElementsByTagName("title");
		
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