
Titanium.UI.setBackgroundColor('#cccccc'); 

//-- Windows inladen
Ti.include('overview.js');
Ti.include('new_problem.js');

//-- Tabgroup Navigatie
var navigation = Titanium.UI.createTabGroup();

var tab_overzicht = Titanium.UI.createTab({
    title:'Overzicht',
    icon: 'img/KS_nav_ui.png',
    window: window_overzicht
});

var tab_probleem = Titanium.UI.createTab({
    title:'Nieuw',
    icon: 'img/KS_nav_ui.png',
    window: window_probleem
});

navigation.addTab(tab_overzicht);
navigation.addTab(tab_probleem);

navigation.open();