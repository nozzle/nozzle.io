<template>
	<div>
		<cx-vui-input
			:label="label.key"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="key"
		></cx-vui-input>
		<cx-vui-input
			:label="label.secret"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="secret"
		></cx-vui-input>
		<p>{{ help.apiPref }} <a :href="help.apiLink" target="_blank">{{ help.apiLinkLabel }}</a></p>
	</div>
</template>

<script>
import {
	label,
	help
} from "./source";

export default {
	name: 'captcha',
	props: {
		incoming: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			label, help,
			key: '',
			secret: ''
		};
	},
	created() {
		this.key = this.incoming.key || ''
		this.secret = this.incoming.secret || ''
	},
	methods: {
		getRequestOnSave() {
			return {
				data: {
					secret: this.secret,
					key: this.key
				}
			};
		}
	}
}
</script>