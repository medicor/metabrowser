
Ext.define('MetaBrowser.controller.Master', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			viewOfNavigation: 'navigationview',
			viewOfRegisters: 'registersview',
			viewOfMonthly: 'monthlyview',
			startNavigationButton: '#startNavigationButton',
			reloadRegistersButton: '#reloadRegistersButton'
		},
		control: {
			startNavigationButton: {
				tap: function(aButton) {
					this.getViewOfNavigation().push(Ext.create('MetaBrowser.view.Register'));
				}
			},
			viewOfNavigation: {
				activate: function(aView) {
					var me = this;
					aView.query('image').forEach(function(e) {e.show(true)});
					MetaBrowser.model.Summary.load('All', {
						success: function(aRecord) {
							var os = aRecord.getData();
							aView.query('#totalSummary')[0].setHtml(
								'<figure class="mb-register-figure">' + 
									(os.CountEvents ? os.CountEvents.toLocaleString() : 'Inga ') + ' registreringar på ' + (os.CountSubjects ? os.CountSubjects.toLocaleString() : 'några') + ' patienter just nu.' +
								'</figure>'
							);
						}
					});
				}
			},
			viewOfRegisters: {
				initialize: function(aView) {
					aView.getStore().load(function() {
						aView.getDockedItems('titlebar')[0].setTitle((aView.getStore().getCount() + ' register i drift'));
					});
				},
				itemtap: function(aList, aRecord, anItem) {
					this.getViewOfNavigation().push(Ext.create('MetaBrowser.view.Monthly', aList.getStore().getAt(aRecord)));
				}
			},
			reloadRegistersButton: {
				tap: function(aButton) {
					this.getViewOfRegisters().getStore().load();
				}
			},
			viewOfMonthly: {
				initialize: function(aView) {
				}
			}
		}
	}
});

function getDateOfFirst(aDate) {
	var cy = aDate.getFullYear(),
		cm = aDate.getMonth(),
		ms = {
			'0': 'januari',
			'1': 'februari',
			'2': 'mars',
			'3': 'april',
			'4': 'maj',
			'5': 'juni',
			'6': 'juli',
			'7': 'augusti',
			'8': 'september',
			'9': 'oktober',
			'10': 'november',
			'11': 'december'
		};
	return ms[cm] + ' ' + cy;
}

function asShortMonth(aMonth) {
	var ms = {
			1:  'Jan',
			2:  'Feb',
			3:  'Mar',
			4:  'Apr',
			5:  'Maj',
			6:  'Jun',
			7:  'Jul',
			8:  'Aug',
			9:  'Sep',
			10: 'Okt',
			11: 'Nov',
			12: 'Dec'
		};
	return ms[aMonth];
}
