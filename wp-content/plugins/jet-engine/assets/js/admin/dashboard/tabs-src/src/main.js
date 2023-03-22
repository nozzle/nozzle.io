import FormsSettings from "./tabs/forms-settings/FormsSettings";

const { applyFilters } = wp.hooks;

const componentTabs = applyFilters( 'jet.engine.tabs.register', [
	FormsSettings
] );

componentTabs.forEach( TabComponent => {
	Vue.component( `jet-engine-tab-${ TabComponent.name }`, TabComponent );
} )
