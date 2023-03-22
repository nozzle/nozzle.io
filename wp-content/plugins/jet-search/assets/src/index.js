const { registerBlockType } = wp.blocks;

import Edit from './components/edit';

registerBlockType( 'jet-search/ajax-search', {
	edit: Edit,
	icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M10.125 15.375C13.2316 15.375 15.75 12.8566 15.75 9.75C15.75 6.6434 13.2316 4.125 10.125 4.125C7.0184 4.125 4.5 6.6434 4.5 9.75C4.5 12.8566 7.0184 15.375 10.125 15.375Z" fill="white" stroke="black" strokeWidth="2"/>
	<path d="M14.0303 13.5L15.3561 14.8258L14.8258 15.3561L13.5 14.0303L14.0303 13.5Z" fill="black"/>
	<path d="M15.343 15.343C15.8003 14.8857 16.5418 14.8857 16.9991 15.343L19.532 17.8759C19.9893 18.3332 19.9893 19.0747 19.532 19.532C19.0747 19.9893 18.3332 19.9893 17.8759 19.532L15.343 16.9991C14.8857 16.5418 14.8857 15.8003 15.343 15.343Z" fill="#4AF3BA" stroke="black"/>
	</svg>,
	save: props => {
		return null;
	},
} );
