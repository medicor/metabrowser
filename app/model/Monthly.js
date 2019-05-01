
Ext.define('MetaBrowser.model.Monthly', {
	extend: 'Ext.data.Model',
	config: {
		proxy: {
			type: 'rest',
			url: MetaBrowser.config.apihost + 'api/overview/monthly',
			reader: {
				type: 'json',
				rootProperty: 'data',
			}
		},
		fields: [
			{ name: 'Year',		type: 'int' },
			{ name: 'Month',	type: 'int' },
			{ name: 'Count',	type: 'int' }
		]
	}
});