<?php
	
	function get_header() {
		if( !is_ajax_request() ) {
			include_once( "header.php" );
		}
	}

	function get_footer() {
		if( !is_ajax_request() ) {
			include_once( "footer.php" );
		}
	}

	function is_ajax_request() {
		if( !empty( $_SERVER["HTTP_X_REQUESTED_WITH"] ) && strtolower( $_SERVER["HTTP_X_REQUESTED_WITH"]) == "xmlhttprequest" ) {
			return true;
		}
		return false;
	}
	
?>