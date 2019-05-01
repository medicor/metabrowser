
Ext.define('MetaBrowser.model.Register', {
	extend: 'Ext.data.Model',
	config: {
		proxy: {
			type: 'rest',
			url: MetaBrowser.config.apihost + 'api/metadata/registers',
			reader: {
				type: 'json',
				rootProperty: 'data',
			}
		},
		idProperty: 'ShortName',
		/*
		associations: {
			type: 'hasOne',
			model: 'Overview',
			primaryKey: 'ShortName',
			foreignKey: 'Name'
		},
		*/
		fields: [
			{ name: 'RegisterID',			type: 'int' },
			{ name: 'RegisterName',			type: 'string' },
			{ name: 'ShortName',			type: 'string' },
			{ name: 'IsUnderDevelopment',	type: 'boolean' },
			{ name: 'Summary',				type: 'auto' }
		]
	}
});