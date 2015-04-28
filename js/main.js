;( function() {

	"use strict";

	$( document ).ready( function() {

		FastClick.attach( document.body );

		var $pageWrap = $( ".page-wrap" ),
			$pageRightColumn = $pageWrap.find( ".page-right-column" ),
			$navOpenBtn = $pageWrap.find( "#nav-open-btn" ),
			$nav = $pageWrap.find( ".nav" ),
			$lisAs = $nav.find( "li a" ),
			linkId = 0;

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
			$( "a" ).off( "click", onLinkClick );
			$( "a" ).on( "click", onLinkClick );
		};
		var onLinkClick = function( evt ) {
			
			var $a = $( this );
			if( $a.attr( "target" ) !== "_blank" ) {

				evt.preventDefault();

				loadLink( $a.attr( "href" ), $a.attr( "data-transition-class" ), $a.attr( "data-transition-direction" ) );

				//update history
				if( window.history ) {
					history.pushState( { "href": $a.attr( "href" ), "transitionClass": $a.attr( "data-transition-class" ), "transitionDirection": $a.attr( "data-transition-direction" ) }, $a.attr( "title" ), $a.attr( "href" ) );
				}	

			}
				

		};

		var loadLink = function( href, transitionClass, transitionDirectionClass ) {

			$lisAs.removeClass( "active" );
			
			var $a = $nav.find( "[href='" + href + "']" );
			$a.addClass( "active" );

			//remove any previous transition classes
			$pageRightColumn.get(0).className = $pageRightColumn.get(0).className.replace(/\btransition-\S+/g, '');
			if( transitionDirectionClass ) {
				$pageRightColumn.addClass(transitionDirectionClass);
			}
			
			$loaderCover.show();
			
			setTimeout( function() {
				$loaderCover.addClass( "active" );
				$loaderCover.addClass( transitionClass );
			}, 25);

			//appear graphic preloader if loading takes long
			var loaderGraphicTimeout = setTimeout( function() {
				$loaderCoverGraphic.fadeIn();
			}, 600 );
			
			setTimeout( function() {
				$.ajax( {
				url: href,
					success: function( data ) {
						
						//append new page
						$contentWrap.html( data );
						//prepare new page
						ajaxifyLinks();
						checkAboutGreeting();
						
						$loaderCover.addClass( "active-down" );
						
						//get rid of preloader
						clearTimeout( loaderGraphicTimeout );
						$loaderCoverGraphic.hide();

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

		window.addEventListener( "popstate", function( event ) {
			if( event.state ) {
				loadLink( event.state.href, event.state.transitionClass, event.state.transitionDirection );
			}
		} );

		var $pageRightColumn = $( ".page-right-column" ),
			$contentWrap = $( ".content-wrap" ),
			$loaderCover = $( ".loader-cover" ),
			$loaderCoverGraphic = $( ".loader-cover-graphic" );

		if( isMobile && !isMobile.any ) {
			ajaxifyLinks();
		}
		/*if( window.location.search.indexOf( "transition" ) > -1 ) {
			ajaxifyLinks();
		
			if( window.location.search.indexOf( "left-right" ) > -1 ) {
				$pageRightColumn.addClass( "left-right" );
			} else if( window.location.search.indexOf( "left-left" ) > -1 ) {
				$pageRightColumn.addClass( "left-left" );
			} else if( window.location.search.indexOf( "top-top" ) > -1 ) {
				$pageRightColumn.addClass( "top-top" );
			}
		}*/
		
	} ); 

})();
