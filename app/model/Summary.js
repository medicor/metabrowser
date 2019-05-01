
Ext.define('MetaBrowser.model.Summary', {
	extend: 'Ext.data.Model',
	config: {
		proxy: {
			type: 'rest',
			url: MetaBrowser.config.apihost + 'api/overview/summary',
			reader: {
				type: 'json',
				rootProperty: 'data',
			}
		},
		fields: [
			{ name: 'CountEvents',		type: 'int' },
			{ name: 'CountSubjects',	type: 'int' },
			{ name: 'CountUsers',		type: 'int' },
			{ name: 'CountUnits',		type: 'int' },
			{ name: 'CountTransfers',	type: 'int' },
			{ name: 'FirstDate',		type: 'date' },
			{ name: 'LatestDate',		type: 'date' }
		]
	}
});