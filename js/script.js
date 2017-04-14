//code for live search + comments update below //

$(document).ready(function(){
	
	 var content = $("#content");
	 var homesection = $("#homesection");
	 var searchbox = $("#search");
	 
	 $('#home').on("click", function(){
		 
		 content.css("display", "none");
		 homesection.css("display", "block");
		 
		 
		});

    searchbox.on("keyup input", function(){

        var input = $(this).val();

        var dropdown = $(this).siblings(".result");

        if(input.length){

            $.get("admin/phpscripts/search.php", {term: input}).done(function(data){

                dropdown.html(data);
				$('.detailsbut').css("display", "none");
				content.css("display", "block");
				content.html(data);
				$("#resultstitle").css("display", "block");
				
				$(document).on("click", ".result p", function(){

        		searchbox.val($(this).text());
        		$(".result").empty();
				 $.get("admin/phpscripts/search.php", {term: $(this).text()}).done(function(data){
				content.html(data);
				homesection.css("display", "none");
		});

    });

            });
			
			
        } else{

            dropdown.empty();
			content.empty();

        }

    });
	

	$(document).on("click", ".detailsbut", function(){
		
		 $.get("admin/phpscripts/details.php", {term: this.id}).done(function(data){
			$("#resultstitle").css("display", "none");
			content.html(data);
			var script = document.createElement('script'); 
			script.type = 'application/javascript'; 
			script.src = 'js/vidcontrols.js'; 
			vidcontrols();
 

		 });
		
		});
		
		

	
	 $('.filter').on("click", function(e){


        var links = e.target.id;

        if(links){

            $.get("admin/phpscripts/filter.php", {term: links}).done(function(data){

			   content.css("display", "block");
			   homesection.css("display", "none");
			   $("#resultstitle").css("display", "none");
               content.html(data);

            });

        } else{

            content.empty();

        }

    });

	
});



function sendPost(e) {
	
var comment = document.querySelector("#comment").value;
var name = document.querySelector("#username").value;
var movie = document.querySelector("#movie").value;
var comments = document.querySelector("#comments");

	if (comment && name && movie) {
	
		$.ajax({ type: 'POST', url: 'admin/phpscripts/comment.php',
	
		data: {
		comment_text: comment,
		comment_username: name,
		comment_movie: movie
	
				},
		success: function (response) {
	
	console.log(comment);

	comments.innerHTML = response + comments.innerHTML;
	comment.value = "";
	name.value = "";

	}
});

}

return false;
}


function vidcontrols() {

	
  console.log("Ready to go, boss!");

  // Buttons
  var play = document.querySelector('.play-pause');
  var mute = document.querySelector('.mute');
  var fullScreen = document.querySelector('.fullscreen');
  var video = document.querySelector('video');

  // Sliders
  var seek = document.querySelector('.seek');
  var volume = document.querySelector('.volume');

play.addEventListener("click", playpause, false);




mute.addEventListener("click", mutevid, false);

fullScreen.addEventListener("click", fullscreen, false);

seek.addEventListener("change", seekvid, false);
seek.addEventListener("mousedown", seekpause, false);
seek.addEventListener("mouseup", seekplay, false);


video.addEventListener("timeupdate", timeupdate, false);


volume.addEventListener("change", volumeadjust, false);


function playpause(){
	
	console.log("y u no");

  if (video.paused === true) {
    // Play the video
   video.play();

    // Update the button text to 'Pause'
    play.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    play.innerHTML = "Play";
  }
}


function mutevid(){

  if (video.muted === false) {
    // Mute the video
   video.muted = true;

    // Update the button text
    mute.innerHTML = "Unmute";
  } else {
    // Unmute the video
   video.muted = false;

    // Update the button text
   mute.innerHTML = "Mute";
  }
}


// Event listener for the full-screen button
function fullscreen(){
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
}


// Event listener for the seek bar
function seekvid() {
  // Calculate the new time
  var time = video.duration * (seek.value / 100);

  // Update the video time
  video.currentTime = time;
}


// Update the seek bar as the video plays
function timeupdate() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  seek.value = value;
}


// Pause the video when the slider handle is being dragged
function seekpause() {
 video.pause();
}

// Play the video when the slider handle is dropped
function seekplay() {
  video.play();
}


// Event listener for the volume bar
function volumeadjust() {
  // Update the video volume
  video.volume = volume.value;
}

}





