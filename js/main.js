;( function() {

	"use strict";

	$( document ).ready( function() {

		FastClick.attach( document.body );

		var $pageWrap = $( ".page-wrap" ),
			$pageRightColumn = $pageWrap.find( ".page-right-column" ),
			$navOpenBtn = $pageWrap.find( "#nav-open-btn" );

		var togglePageWrapOpenClass = function( evt ) {

			evt.stopImmediatePropagation();

			$pageWrap.toggleClass( "open" );
			$navOpenBtn.toggleClass( "active" );

			//add additional click listener to right column for easier closing			
			if( $pageWrap.hasClass( "open" ) ) {
				$pageRightColumn.on( "click", togglePageWrapOpenClass );
			} else {
				$pageRightColumn.off( "click" );// togglePageWrapOpenClass );
			}

		};

		$navOpenBtn.on( "click", togglePageWrapOpenClass );

		//about page greetings
		var $aboutContentWrap = $( ".about-content-wrap" );
		if( $aboutContentWrap.length ) {

			//http://stackoverflow.com/questions/2182511/setting-a-greeting-based-on-users-time-good-morning-good-afternoon
			var $h1 = $aboutContentWrap.find( "h1" ),
				now = new Date(),
				hrs = now.getHours(),
				msg = "";

			if( hrs > 0 ) msg = "Mornin'<br />Sunshine!"; // REALLY early
			if( hrs > 6 ) msg = "Good<br />morning";      // After 6am
			if( hrs > 12 ) msg = "Good<br />afternoon";    // After 12pm
			if( hrs > 17 ) msg = "Good<br />evening";      // After 5pm
			if( hrs > 22 ) msg = "Good<br />night!";        // After 10pm

			$h1.html( msg );
			$h1.css( "visibility", "visible" );

		}

	} ); 

})();
