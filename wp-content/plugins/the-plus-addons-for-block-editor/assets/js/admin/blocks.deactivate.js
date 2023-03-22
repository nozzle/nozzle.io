wp.domReady(function(){
	/*Unregister Blocks The Plus Addons*/
	let tpgb_deactivated_blocks = tpgb_blocks_load.deactivated_blocks;
	
	if ( tpgb_deactivated_blocks!=undefined && tpgb_deactivated_blocks!='' && tpgb_deactivated_blocks.length ) {
		if ( typeof wp.blocks.unregisterBlockType !== "undefined" ) {
		
			for( block_index in tpgb_deactivated_blocks ) {
				if(tpgb_deactivated_blocks[block_index].includes("core/") && wp.blocks.getBlockType( tpgb_deactivated_blocks[block_index] ) !== undefined){
					wp.blocks.unregisterBlockType( tpgb_deactivated_blocks[block_index] );
				}else if(wp.blocks.getBlockType( tpgb_blocks_load.category+'/'+tpgb_deactivated_blocks[block_index] ) !== undefined){
					wp.blocks.unregisterBlockType( tpgb_blocks_load.category+'/'+tpgb_deactivated_blocks[block_index] );
				}
			}
			
		}
	}
});	