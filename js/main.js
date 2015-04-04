;( function() {

	"use strict";

	$( document ).ready( function() {

		FastClick.attach( document.body );

		var $pageInnerWrap = $( ".page-inner-wrap" );

		$( "#nav-open-btn" ).on( "click", function( evt ) {

			evt.preventDefault();
			$pageInnerWrap.toggleClass( "open" );
		
		} );

	} ); 

})();
