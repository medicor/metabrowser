
Ext.define('MetaBrowser.view.Monthly', {
	extend: 'Ext.Panel',
	xtype: 'monthlyview',
    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.series.Bar',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category'
    ],
	constructor: function(aRegister) {
		this.callParent();
		this.setTitle(aRegister.get('RegisterName'));
		this.query('chart')[0].getStore().load({
			url: MetaBrowser.model.Monthly.getProxy().getUrl() + '/' + aRegister.get('ShortName')
		});
	},
	config: {
		layout: 'fit',
		title: '?', // setTitle won't work otherwise?
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			title: 'Antal registreringar per månad',
		},{
			xtype: 'chart',
			store: 'monthlyStore',
			animate: false,
//			colors: Kitchensink.view.ColorPatterns.getBaseColors(),
//			interactions: ['iteminfo'],
			series: [{
				type: 'bar',
				xField: 'Month',
				yField: 'Count',
				style: {
					fill: '#7eb105',
					stroke: '#5b7f03',
					maxBarWidth: 30
				}
			}],
			axes: [{
				type: 'numeric',
				position: 'left',
				grid: {
					odd: {
						fill: '#e8e8e8'
					}
				}
			},{
				type: 'category',
				position: 'bottom',
				label: {
					rotate: {
						degrees: -90
					}
				},
				renderer: function(aMonth) {
					var s = this.getParent().getParent().getStore();
					var r = s.getAt(s.findExact('Month', aMonth)).getData();
					return asShortMonth(r.Month) + ' ' + r.Year;
				}
			}]
		}]
	}
});