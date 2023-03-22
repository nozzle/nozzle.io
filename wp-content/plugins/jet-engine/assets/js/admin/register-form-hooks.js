( () => {
	const { applyFilters } = wp.hooks;
	const notifications = applyFilters( 'jet.engine.register.notifications', [] );
	const formFields = applyFilters( 'jet.engine.register.fields', [] );
	const metaBoxes = applyFilters( 'jet.engine.register.metaBoxes', [] );

	notifications.forEach( NotificationComponent => {
		Vue.component( `jet-engine-notification-${ NotificationComponent.name }`, NotificationComponent );
	} );

	formFields.forEach( FieldComponent => {
		Vue.component( `jet-engine-field-${ FieldComponent.name }`, FieldComponent );
	} );

	metaBoxes.forEach( BoxComponent => {
		new Vue({
			el: `#jet-engine-meta-box-${ BoxComponent.name }`,
			template: '<BoxComponent />',
			components: { BoxComponent }
		});
	} )
} )()