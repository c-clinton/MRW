<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Moview</title>
    <link rel="stylesheet" href="css/foundation.css"/>
    <link rel="stylesheet" href="css/main.css" type="text/css" media="screen">
    <link rel="stylesheet" href="css/main1.css" type="text/css" media="screen">
    <link rel="stylesheet" href="css/app.css" type="text/css" media="screen">
  </head>
  <body>
  <div class="wrapper">
    <h1 class="hide">navigation bar</h1>
    <header class="row">
            <div id="logo" class="small-6 large-centered large-8">
            <h2 class="hide">logo</h2>
            <img src="images/logo.svg" alt="logo">
            </div>
            <nav class="small-12  large-centered large-12 ">
            	<h2 class="hide">Main Navigation</h2>
              <div class="title-bar" data-responsive-toggle="main-menu" data-hide-for="large">
              <button class="menu-icon float-right" type="button" data-toggle></button>
              </div>
                <div id="main-menu">
                  <ul id="mainNav">
                    <li><a href="#" id="home">Home</a></li>
					<li><a href="#" class="filter" id="action">Action</a></li>
                    <li><a href="#" class="filter"  id="comedy">Comedy</a></li>
					<li><a href="#" class="filter"  id="family">Family</a></li>
					<li><a href="#" class="filter" id="horror">Horror</a>
					</li>
                  </ul>
                  </div>
            </nav>
                           <div class="small-12 large-centered large-12 input-group columns">
            <label for="search" class="input-group-label">Search</label>
      <input name="search" id="search" type="text" class="input-group-field">
      <div class="result"></div>

</header>

<div id="homesection" class="row small-collapse large-uncollapse">
  <div class="small-3  large-12  columns" id="imgWrapper">
       <h1 class="hidden">images</h1>
    <div class="imgSlider"><img src="images/img1.jpg" alt="img1"></div>
    <div class="imgSlider"><img src="images/img2.jpg" alt="img2"></div>
    <div class="imgSlider"><img src="images/img3.jpg" alt="img3"></div>
    <div class="imgSlider"><img src="images/img4.jpg" alt="img4"></div>
    </div>
    <div class="small-12 large-12 columns" id="reccomendations">
      <h2>Suggested Movies</h2>

    <div class="row" id="imges">
   
<div class="small-6 large-3 columns">
    <img src="images/prdt1.png"  alt="prdtimg">
   </div>
  <div class="small-6 large-3 columns">
    <img src="images/prdt2.png"  alt="prdtimg">
  </div>
  <div class="small-6 large-3 margin columns">
    <img src="images/prdt3.png"  alt="prdtimg">
   </div>
   <div class="small-6 large-3 margin columns">
     <img src="images/prdt4.png"  alt="prdtimg">
    </div>

</div>

</div>
</div>

<div>
<div id="resultstitle" class="row">
<h2>Search Results</h2>
</div>
<div id="content" class="row">
</div>
</div>



<div class="row">
<h1 class="hidden">footer</h1>
  <div class="small-12 large-12 columns" id="footer">
<div>
  <p>&copy; 2017 by moview. All rights reserved.</p>
  <ul>
    <li>
      <a href="https://twitter.com/" id="twitter">twitter</a>
    </li>
    <li>
      <a href="https://www.facebook.com/" id="facebook">facebook</a>
    </li>
    <li>
      <a href="https://plus.google.com/" id="googleplus">googleplus</a>
    </li>
    <li>
      <a href="https://www.pinterest.com/" id="pinterest">pinterest</a>
    </li>
  </ul>
</div>
</div>
</div>

    <script src="js/vendor/jquery.min.js"></script>
    <script src="js/vendor/what-input.min.js"></script>
    <script src="js/foundation.min.js"></script>
    <script src="js/TweenMax.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/app.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>
