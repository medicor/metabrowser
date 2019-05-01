
Ext.define('MetaBrowser.store.Register', {
    extend: 'Ext.data.Store',
    config: {
		autoLoad: false,
		model: 'MetaBrowser.model.Register',
		storeId: 'registerStore',
		sorters: 'RegisterName', /*[{
			sorterFn: function(r1, r2) {
				var c1 = r1.data.Overview && r1.data.Overview.CountEvents || null,
					c2 = r2.data.Overview && r2.data.Overview.CountEvents || null;
                return c1 === c2 ? 0 : (c1 > c2 ? 1 : -1);
			},
			direction: 'DESC'
        }],*/
		filters: function(anItem) {
			return !anItem.data.IsUnderDevelopment;
        },
		listeners: {
			load: function(aStore) {
				// Load overview data into each Register object.
				aStore.each(function(aRegister) {
					MetaBrowser.model.Summary.load(aRegister.get('ShortName'), {
						success: function(aSummary) {
							if (aSummary)
								aRegister.set('Summary', aSummary.getData()); else 
								aRegister.set('Summary', {});
						}
					});
				});
        	}
        }
    }
});