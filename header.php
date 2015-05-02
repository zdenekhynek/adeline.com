<?php 
	global $active_page;
	if( !isset( $active_page ) ) {
		$active_page = "";
	}
?>

<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Adeline O'Moreau</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
		<link rel="apple-touch-icon" href="apple-touch-icon.png">

		<link href='http://fonts.googleapis.com/css?family=Merriweather+Sans:300' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Montserrat:700' rel='stylesheet' type='text/css'>

		<link rel="stylesheet" href="css/normalize.min.css">
		
		<link rel="stylesheet" href="css/general.css">
		<link rel="stylesheet" href="css/base.css">
		<link rel="stylesheet" href="css/mobile.css">
		<link rel="stylesheet" href="css/desktop.css">

		<script src="js/vendor/modernizr-2.8.3.min.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-62427583-1', 'auto');
  ga('send', 'pageview');

</script>
	</head>
	<body>
		<!--[if lt IE 8]>
			<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<div class="page-wrap">
			<div class="page-inner-wrap clearfix">
				
				<div class="page-left-column">
					<!-- desktop header -->
					<header id="top" role="banner" class="desk-header desk-only">
						<h2><a href="index.php" class="ir" title="Homepage">Adeline</a></h2>
					</header>
					<!-- end desktop header -->
					<!-- navigation -->
					<nav class="nav" role="navigation">
						<ul class="no-bullets">
							<li>
								<h3><a href="index">Work</a></h3>
								<ul class="nav-work-list no-bullets">
									<li><a data-transition-direction="transition-left-right" data-transition-class="light-green" href="preventing-ebola" title="Prevention of ebola" class="light-green <?php if( $active_page == 'preventing-ebola' ) echo 'active'; ?>">Prevention of ebola</a></li>
									<li><a data-transition-direction="transition-left-right" data-transition-class="dark-green" href="global-happy-party" title="Global happy party" class="dark-green <?php if( $active_page == 'global-happy-party' ) echo 'active'; ?>">Global happy party</a></li>
									<li><a data-transition-direction="transition-left-right" data-transition-class="dark-yellow" href="epic-stories" title="Epic stories" class="dark-yellow <?php if( $active_page == 'epic-stories' ) echo 'active'; ?>">Epic stories</a></li>
									<li><a data-transition-direction="transition-left-right" data-transition-class="light-yellow" href="behind-brutes" title="Behind the brutes" class="light-yellow <?php if( $active_page == 'behind-brutes' ) echo 'active'; ?>">Behind the brutes</a></li>
									<li><a data-transition-direction="transition-left-right" data-transition-class="light-blue" href="sony-xperia" title="" class="light-blue <?php if( $active_page == 'sony-experia' ) echo 'active'; ?>">Sony xperia</a></li>
									<li><a data-transition-direction="transition-left-right" data-transition-class="dark-blue" href="ouch" title="" class="dark-blue <?php if( $active_page == 'ouch' ) echo 'active'; ?>">Anatomy</a></li>
									<li><a data-transition-direction="transition-left-right" data-transition-class="light-purple" href="combien-de-dodos" title="" class="light-purple <?php if( $active_page == 'combien-de-dodos' ) echo 'active'; ?>">Combien de dodos?</a></li>
									<li><a data-transition-direction="transition-left-right" data-transition-class="dark-purple" href="1000km" title="" class="dark-purple <?php if( $active_page == '1000km' ) echo 'active'; ?>">1000km</a></li>
									<li data-transition-class="light-red" href="#" title="" class="light-red <?php if( $active_page == 'tweeting-rooms' ) echo 'active'; ?>" style="color:#E0E0DF">[coming soon]</li>
									<li data-transition-class="dark-red"  class="dark-red <?php if( $active_page == 'victorinox-reaburn' ) echo 'active'; ?>" style="color:#E0E0DF">[coming soon]</li>
								</ul>
							</li>
							<li>
								<h3><a href="about.php" class="<?php if( $active_page == 'about' ) echo 'active'; ?>">About<br />+Contact</a></h3>
							</li>
						</ul>
						<ul class="socials-list clearfix no-bullets">
							<li class="twitter"><a href="https://twitter.com/Ecunard" target="_blank" title=""><i class="io io-twitter"></i><span class="visually-hidden">Twitter</a></span></li>
							<li class="tumblr"><a href="http://adelineomoreau.tumblr.com/" target="_blank" title=""><i class="io io-tumblr"></i><span class="visually-hidden">Tumblr</a></span></li>
							<li class="linkedin"><a href="https://uk.linkedin.com/in/adelineomoreau" target="_blank" title=""><i class="io io-linkedin"></i><span class="visually-hidden">LinkedIn</a></span></li>
						</ul>
					</nav>

					<!-- end navigation -->
				</div>

				<div class="page-right-column">
					<!-- color cover -->
					<div class="loader-cover">
						<div class="loader-cover-inner">
							<span class="loader-cover-graphic"></span>
						</div>
					</div>
	       			<!-- header -->
					<header id="top" role="banner" class="mob-header mob-only">
						<h1><a href="index.php" class="ir" title="Homepage">Adeline</a></h1>
						<a class="nav-btn ir" id="nav-open-btn" href="#nav"><span>Adeline Navigation</span></a>
					</header>
					<!-- end header -->
					<div class="content-wrap">