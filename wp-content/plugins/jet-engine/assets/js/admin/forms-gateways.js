var JEFormGateways = new Vue({
	el: '#gateways_data',
	data: {
		gateways: JSON.parse( JSON.stringify( JetEngineGatewaysSettings.gateways ) ),
	},
	created: function() {
		if ( ! this.gateways.notifications_before || ! this.gateways.notifications_before.length ) {
			this.$set( this.gateways, 'notifications_before', [] );
		}

		if ( ! this.gateways.notifications_success || ! this.gateways.notifications_success.length ) {
			this.$set( this.gateways, 'notifications_success', [] );
		}

		if ( ! this.gateways.notifications_failed || ! this.gateways.notifications_failed.length ) {
			this.$set( this.gateways, 'notifications_failed', [] );
		}
	},
	computed: {
		notificationsList: function() {
			return window.JEBookingFormNotifications.items;
		},
		availableFields: function() {
			return window.JEBookingFormNotifications.availableFields;
		},
		hasRedirectNotification: function() {

			if ( ! this.notificationsList || ! this.notificationsList.length ) {
				return false;
			}

			for ( var i = 0; i < this.notificationsList.length; i++) {

				if ( 'redirect' === this.notificationsList[ i ].type ) {
					return true;
				}

			}

			return false;
		}
	},
	watch: {
		gateways: {
			handler: function( newVal ) {
				console.log( newVal );
			},
			deep: true
		},
	},
	methods: {
		hasPostNotification: function() {

			if ( ! this.notificationsList || ! this.notificationsList.length ) {
				return false;
			}

			for ( var i = 0; i < this.notificationsList.length; i++) {

				if ( 'insert_post' === this.notificationsList[ i ].type ) {
					return true;
				}

			}

			return false;

		},
		getNotificationLabel: function( notification ) {

			var result = notification.type;

			if ( 'email' === result ) {
				result += ' to ' + notification.mail_to;

				if ( 'custom' === notification.mail_to ) {
					result += '/' + notification.custom_email;
				} else if ( 'form' === notification.mail_to ) {
					result += '/' + notification.from_field;
				}

				result += ': ' + notification.email.subject;

			}

			if ( 'insert_post' === result ) {
				result += ': ' + notification.post_type;
			}

			return result;
		}
	}
});
