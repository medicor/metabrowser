
Ext.define('MetaBrowser.store.Monthly', {
    extend: 'Ext.data.Store',
    requires: [
        'MetaBrowser.model.Monthly'
    ],
    config: {
        autoLoad: false,
        model: 'MetaBrowser.model.Monthly',
        storeId: 'monthlyStore',
		listeners: {
			refresh: function(aStore, aRecordList) {
				if (aStore.getCount() === 0) {
					return;
				}
				aStore.suspendEvents();
				// Insert missing months into store.
				var dt = new Date();
				var mn = dt.getMonth()+1;
				var yr = dt.getFullYear()-1;
				var mc = mn;
				for (var i=0; i < 12; i++) {
					if (mc === 12) {
						mc = 1;
						yr++;
					} else {
						mc++;
					}
					var rc = aStore.getAt(i);
					var mr = rc && rc.get('Month');
					if (mr !== mc) {
						aStore.insert(i, [Ext.create('MetaBrowser.model.Monthly', {
							Year:  yr,
							Month: mc,
							Count: 0
						})])
					}
				}
				// Make counters cumulative.
//				var tc = 0;
//				aStore.each(function(aRecord) {
//					tc += aRecord.get('Count');
//					aRecord.set('Count', tc);
//					console.log(aRecord.get('Year'), aRecord.get('Month'), aRecord.get('Count'));
//				})
				aStore.resumeEvents();
			}
        }
	}
});