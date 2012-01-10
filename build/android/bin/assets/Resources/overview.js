
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
			var window_details = Ti.UI.createWindow({
				zindex: 1,
				backgroundColor: '#333',
				layout: 'vertical'
			});
			
			var btn_back = Ti.UI.createButton({
				title : "<-",
				top:0,
				left:0,
				width: 50,
				height:50
			});
			
			btn_back.addEventListener("click" , function(e){
				window_details.close();
			});
			
			var lblTitel = Ti.UI.createLabel();
			var lblLokaal = Ti.UI.createLabel();
			var lblBeschrijving = Ti.UI.createLabel();
			
			var doc = this.responseXML.documentElement;		
			var elements = doc.getElementsByTagName("title");
			
			lblTitel.text = doc.getElementsByTagName("title").item(0).text;
			lblLokaal.text = doc.getElementsByTagName("value").item(1).text;
			lblBeschrijving.text = doc.getElementsByTagName("value").item(0).text;
			
			window_details.add(btn_back);
			window_details.add(lblTitel);
			window_details.add(lblLokaal);
			window_details.add(lblBeschrijving);
			
			window_details.open();
			
			/*var image = Ti.UI.createImageView({
				image:'http://3.bp.blogspot.com/-kQtmk3Ql7HI/TdlBTl0WpKI/AAAAAAAAAFw/ioQw2PCMiCU/s1600/fujistsu_projector_bay_v1.jpg'
			})
			
			view_overzicht.add(image);*/
			
		}

xhr.open('GET','http://less-problems.webatu.com/api/views/problems.xml');
xhr.send();

view_overzicht.add(tableview_overzicht);
window_overzicht.add(view_overzicht);