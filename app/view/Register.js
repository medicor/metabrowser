
Ext.define('MetaBrowser.view.Register', {
	extend: 'Ext.dataview.List',
	xtype: 'registersview',
	config: {
		title: 'Registeröversikt',
		store: 'registerStore',
		useSimpleItems: true,
//		mode: 'SIMPLE',
//		triggerEvent: 'itemswipe',
//		onItemDisclosure: true,
		itemTpl: Ext.create('Ext.XTemplate', 
			'<section>',
				'<article class="mb-register-article">{RegisterName}</article>',
				'<figure>{[this.getCountEvents(values)]} registreringar på {[this.getCountSubjects(values)]} patienter.</figure>',
				'<figure>Utfört av {[this.getCountUsers(values)]} användare på {[this.getCountUnits(values)]} vårdenheter.</figure>',
				'<figure>{[this.getShareTransfers(values)]}.</figure>',
				'<figure>Första registrering {[this.getFirstDate(values)]}.</figure>',
			'</section>',
			{
				getCountEvents: function(aRegister) {
					if (!aRegister.Summary)
						return '<span  class="loader"></span>'; else 
						if (aRegister.Summary.CountEvents) 
							return aRegister.Summary.CountEvents.toLocaleString(); else
							return 'Inga';
				},
				getCountSubjects: function(aRegister) {
					if (!aRegister.Summary)
						return '<span  class="loader"></span>'; else
						if (aRegister.Summary.CountSubjects)
							return aRegister.Summary.CountSubjects.toLocaleString(); else
							return 'några';
				},
				getCountUsers: function(aRegister) {
					if (!aRegister.Summary)
						return '<span  class="loader"></span>'; else
						if (aRegister.Summary.CountUsers)
							return aRegister.Summary.CountUsers.toLocaleString(); else
							return 'några';
				},
				getCountUnits: function(aRegister) {
					if (!aRegister.Summary)
						return '<span  class="loader"></span>'; else
						if (aRegister.Summary.CountUnits)
							return aRegister.Summary.CountUnits.toLocaleString(); else
							return 'några';
				},
				getShareTransfers: function(aRegister) {
					if (!aRegister.Summary)
						return '<span  class="loader"></span>'; else 
						return aRegister.Summary.CountTransfers.toLocaleString() + ' registreringar direktöverförda (' + (100*aRegister.Summary.CountTransfers/aRegister.Summary.CountEvents).toFixed().toString() + '%)';
				},
				getFirstDate: function(aRegister) {
					if (!aRegister.Summary)
						return '<span  class="loader"></span>'; else
						if (aRegister.Summary.FirstDate) 
							return getDateOfFirst(aRegister.Summary.FirstDate); else
							return 'har inte gjorts';
				}
			}
		),
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			items: [{
				xtype: 'button',
				id: 'reloadRegistersButton',
				iconCls: 'refresh',
				align: 'right'
			}]
		}]
	}
});