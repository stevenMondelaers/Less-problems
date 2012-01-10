
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
		var id = doc.getElementsByTagName("vid").item(i);
		
		tableview_overzicht.appendRow(Ti.UI.createTableViewRow({hasChild: true, title: '' + title.text, id: '' + id.text}));
		
	}
	
	tableview_overzicht.addEventListener('click', function(e){
		//alert(e.rowData.id);
		//getDetails(e.rowData.id);
		
		xhr_details.open('GET' , 'http://less-problems.webatu.com/api/node/'+e.rowData.id+'.xml');
		xhr_details.send();
		
	});
	
};

var xhr_details = Ti.Network.createHTTPClient();
		
xhr_details.onload = function(){
			//alert('Succes');
			
			//alert(this.responseText);
			
			var doc = this.responseXML.documentElement;		
			var elements = doc.getElementsByTagName("title");
			
			var view_details = Ti.UI.createView({
				backgroundColor: '#333'
			});
			
			window_overzicht.title = doc.getElementsByTagName("title").item(0).text;
			
			var btn_back = Ti.UI.createButton({
				title : "Back",
				height:40,
				width:145,
				top:10,
				left:10,
				style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
			});
			
			btn_back.addEventListener("click" , function(e){
				view_details.hide();
				window_overzicht.remove(view_details);
				window_overzicht.title = 'Overzicht';
				window_overzicht.leftNavButton = null;
				view_overzicht.show();
			});
			
			var lblTitel = Ti.UI.createLabel();
			var lblLokaal = Ti.UI.createLabel();
			var lblBeschrijving = Ti.UI.createLabel();
			
			lblTitel.text = doc.getElementsByTagName("title").item(0).text;
			lblLokaal.text = doc.getElementsByTagName("value").item(1).text;
			lblBeschrijving.text = doc.getElementsByTagName("value").item(0).text;
			
			if (Titanium.Platform.name == 'iPhone OS')
			{
    			window_overzicht.leftNavButton = btn_back;
			}
 
			if (Titanium.Platform.name == 'android')
			{
    			view_details.add(btn_back);
			}
			
			
			view_details.add(lblTitel);
			view_details.add(lblLokaal);
			view_details.add(lblBeschrijving);
			
			window_overzicht.add(view_details);
			
		}

xhr.open('GET','http://less-problems.webatu.com/api/views/problems.xml');
xhr.send();

view_overzicht.add(tableview_overzicht);
window_overzicht.add(view_overzicht);