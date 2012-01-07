
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



/*
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
*/