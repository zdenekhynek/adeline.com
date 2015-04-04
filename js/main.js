;( function() {

	"use strict";

	$( document ).ready( function() {

		FastClick.attach( document.body );

		var $pageWrap = $( ".page-wrap" ),
			$pageRightColumn = $pageWrap.find( ".page-right-column" ),
			$navOpenBtn = $pageWrap.find( "#nav-open-btn" );

		var togglePageWrapOpenClass = function( evt ) {

			evt.stopImmediatePropagation();

			//freeze scroll
			if( !$pageWrap.hasClass( "open" ) ) {
				console.log( "freezing scroll" );
				$pageRightColumn.scrollTop( $( "body" ).scrollTop() );
			} else {
				
			}
			


			$pageWrap.toggleClass( "open" );
			
			//add additional click listener to right column for easier closing			
			if( $pageWrap.hasClass( "open" ) ) {
				$pageRightColumn.on( "click", togglePageWrapOpenClass );
			} else {
				$pageRightColumn.off( "click" );// togglePageWrapOpenClass );
			}

		};

		$navOpenBtn.on( "click", togglePageWrapOpenClass );



	} ); 

})();
