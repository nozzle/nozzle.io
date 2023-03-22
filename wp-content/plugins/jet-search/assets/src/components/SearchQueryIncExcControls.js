import Select, { createFilter } from 'react-select';

const { __ } = wp.i18n;

const {
	PanelBody
} = wp.components;

const {
	useState
} = wp.element;

const SearchQueryIncExcControls = props => {
	const {
		attributes,
		multipleSelector
	} = props;

	const [ termsList, setTermsList ] = useState( [] );

	const filterOption = ( candidate, input ) => input.length > 1 && createFilter({})( candidate, input );

	const noOptionsMessage = input => {
		input.inputValue.length > 1 ? "No options" : "Please enter 1 or more characters";
	}

	function searchTerms( type ) {
		const queryType = type,
			requestURL  = window.ajaxurl + '?action=jet_search_get_query_control_options&query_type=' + queryType + '';

		wp.apiFetch( {
			method: 'get',
			url: requestURL
		} ).then( function ( response ) {

			if (response.success) {

				let list     = response.data.results,
					termList = [];

				list.forEach( ( element, i = 1 ) => {
					termList[i] = {
						value: element.id,
						label: element.text
					};
					i++;
				} );

				setTermsList( termList );
			}
		} );
	}

	return (
		<PanelBody
			title={ __( 'Search Query Includes/Excludes' ) }
			initialOpen={ false }
		>
			<p>Include</p>

			<label>Terms</label>
			<Select
				defaultValue={ attributes.include_terms_ids_list }
				className="jet-ajax-search-block-separator__after"
				isMulti
				options={ termsList }
				filterOption={ filterOption }
				noOptionsMessage={ noOptionsMessage }
				onChange={ ( value ) => {
					multipleSelector( value, 'include_terms_ids' );
				} }
				onInputChange={ (e) => {
					if ( e.length > 1 ) {
						searchTerms( 'terms' )
					}
				} }
			/>

			<p>Exclude</p>

			<label>Terms</label>
			<Select
				defaultValue={ attributes.exclude_terms_ids_list }
				className="jet-ajax-search-block-separator__after"
				isMulti
				options={ termsList }
				filterOption={ filterOption }
				noOptionsMessage={ noOptionsMessage }
				onChange={ ( value ) => {
					multipleSelector( value, 'exclude_terms_ids' );
				} }
				onInputChange={ (e) => {
					if ( e.length > 1 ) {
						searchTerms( 'terms' )
					}
				} }
			/>

			<label>Posts</label>
			<Select
				defaultValue={ attributes.exclude_posts_ids_list }
				className="jet-ajax-search-block-separator__after"
				isMulti
				options={ termsList }
				filterOption={ filterOption }
				noOptionsMessage={ noOptionsMessage }
				onChange={ ( value ) => {
					multipleSelector( value, 'exclude_posts_ids' );
				} }
				onInputChange={ (e) => {
					if ( e.length > 1 ) {
						searchTerms( 'posts' )
					}
				} }
			/>
		</PanelBody>
	)
}

export default SearchQueryIncExcControls;