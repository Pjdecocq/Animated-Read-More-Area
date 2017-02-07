<?php
/*
 * For wordpress purposes I created a shortcode function.
 * It's not a plugin yet so paste this part in you're functions.php or include it somewhere else.
 */
 
function read_more( $atts, $content = null ){
	/* 
	 * If you've got multiple read mores span's/div's on one page, we must give them a unique indentifier like an ID.
	 * By default the ID for a single read more area is set to: "read-more"
	 */
	$atts = shortcode_atts(array(
		'id'	=> null,
	), $atts);

	if(isset($atts['id']) && is_numeric($atts['id'])){
		$id = esc_attr($atts['id']);
	}
	return '<div class="read-more" data-base="70" data-id="'.($id?$id:'read-more').'" data-height="false">'.$content.'<em></em></div><button data-target="'.($id?$id:'read-more').'">Lees meer</button>';
}
add_shortcode( 'read-more', 'read_more' );
