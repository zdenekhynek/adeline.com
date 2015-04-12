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

		//homepage
		/*var $a = $( ".homepage-content-wrap" ).find( "a" ),
			$loaderCover = $( ".loader-cover" );
		$a.on( "click", function( evt ) {

			evt.preventDefault();
			$loaderCover.show();
			setTimeout( function() {
				$loaderCover.addClass( "active" );
			}, 25);
			

		} );*/	

		//about page greetings
		var checkAboutGreeting = function() {
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
		}
		checkAboutGreeting();

		//loader class
		var ajaxifyLinks = function() {
			$( "a" ).off( "click", loadLink );
			$( "a" ).on( "click", loadLink );
		};
		var loadLink = function( evt ) {
			
			evt.preventDefault();
			
			var $a = $( this ),
				transitionClass = $a.attr( "data-transition-class" );

			$loaderCover.show();
			
			setTimeout( function() {
				$loaderCover.addClass( "active" );
				$loaderCover.addClass( transitionClass );
			}, 25);
			
			setTimeout( function() {
				$.ajax( {
				url: $a.attr( "href" ),
					success: function( data ) {
						
						//append new page
						$contentWrap.html( data );
						//prepare new page
						ajaxifyLinks();
						checkAboutGreeting();

						$loaderCover.addClass( "active-down" );
						setTimeout( function() {
							$loaderCover.hide();
							//reset
							$loaderCover.removeClass();
							$loaderCover.addClass("loader-cover");
						}, 400);
					}
				});
			}, 375);

		};
		var $pageRightColumn = $( ".page-right-column" ),
			$contentWrap = $( ".content-wrap" ),
			$loaderCover = $( ".loader-cover" );

		if( window.location.search.indexOf( "transition" ) > -1 ) {
			ajaxifyLinks();
		
			if( window.location.search.indexOf( "left-right" ) > -1 ) {
				$pageRightColumn.addClass( "left-right" );
			} else if( window.location.search.indexOf( "left-left" ) > -1 ) {
				$pageRightColumn.addClass( "left-left" );
			} else if( window.location.search.indexOf( "top-top" ) > -1 ) {
				$pageRightColumn.addClass( "top-top" );
			}
		}
		
	} ); 

})();
