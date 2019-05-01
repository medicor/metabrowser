
Ext.namespace('MetaBrowser');

MetaBrowser.config = {
	apihost: 'http://stratum.registercentrum.se/',
	apikey: 'MpuYxfbtp5I='
};

Ext.Loader.setConfig({
	enabled: true,
	disableCaching: false,
	paths: {
		MetaBrowser: 'app'
	}
});

Ext.application({
	name: 'MetaBrowser',
	requires: [
		'Ext.Img'
	],
	controllers:	['Master'],
	models:			[				'Register',	'Summary',	'Monthly'],
	stores:			[				'Register',				'Monthly'],
	views:			['Navigation',	'Register',				'Monthly'],
	viewport: {
		autoMaximize: true
	},
	launch: function() {
		Ext.Ajax.setExtraParams({
			apikey: MetaBrowser.config.apikey
		});
		if (Ext.os.is.desktop) {
			Ext.Viewport.setLeft('100%');
			Ext.Viewport.setWidth(640);
		};
		Ext.Viewport.add(Ext.create('MetaBrowser.view.Navigation'));
	}
});
