
Ext.define('MetaBrowser.store.Overview', {
    extend: 'Ext.data.Store',
    requires: [
        'MetaBrowser.model.Overview'
    ],
    config: {
        autoLoad: true,
        model: 'MetaBrowser.model.Overview',
        storeId: 'overviewStore',
        listeners: {
        	// Transform object to array.
        	load: function(aStore, anObject) {
        		var o = anObject[0].raw;
				for (var n in o) {
					aStore.add(Ext.create('MetaBrowser.model.Overview', o[n]));
				}
        		aStore.removeAt(0);
        	}
        }
    }
});