
Ext.define('MetaBrowser.view.Navigation', {
	extend: 'Ext.navigation.View',
	xtype: 'navigationview',
	config: {
		fullscreen: true,
		items: [{
			layout: 'vbox',
			title: 'Stratum',
			margin: 10,
			items: [{
				flex: 5,
				xtype: 'image',
				showAnimation: 'cube',
				src: 'resources/images/rc-circular-swe.png'
			},{
				xtype: 'spacer'
			},{
				xtype: 'component',
				flex: 1,
				style: 'text-align: center',
				html: '<div style="font-size: 85%; font-weight: bold">Information om regi&shy;stren i vår platt&shy;form Stratum.</div>'
			},{
				xtype: 'component',
				id: 'totalSummary',
				flex: 1,
				style: 'text-align: center',
				html: '<span class="loader" style="font-size: 75%">laddar summering ...</span>'
			},{
				xtype: 'spacer'
			},{
				xtype: 'button',
				text: 'Starta',
				id: 'startNavigationButton',
				ui: 'confirm'
			}]
		}]
	}
});