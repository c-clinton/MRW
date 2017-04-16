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



function sendpost(e) {
		
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
	
		comments.innerHTML = response + comments.innerHTML;
		comment.value = "";
		name.value = "";
	
		}
	});
	
}

return false;
}


function vidcontrols() {

	var play = document.querySelector('.play-pause');
	var mute = document.querySelector('.mute');
 	var fullScreen = document.querySelector('.fullscreen');
	var video = document.querySelector('video');
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
	
	
	  if (video.paused === true) {
		  
	   video.play();
	   play.innerHTML = "<img src=\"images/icons/pause.png\" alt=\"pause\">";
	   
	  } else {
	
		video.pause();
		play.innerHTML = "<img src=\"images/icons/play.png\" alt=\"play\">";
		
	  }
	}
	
	
	function mutevid(){
	
	  if (video.muted === false) {
	   video.muted = true;
	
	
		mute.innerHTML = "<img src=\"images/icons/mute.png\" alt=\"unmute\">";
	  } else {
	
	   video.muted = false;
	   mute.innerHTML = "<img src=\"images/icons/volume.png\" alt=\"mute\">";
	  }
	}
	
	function fullscreen(){
	  if (video.requestFullscreen) {
		video.requestFullscreen();
	  } else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen(); 
	  } else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	  }
	}
	
	
	function seekvid() {
	
	  var time = video.duration * (seek.value / 100);
	  video.currentTime = time;
	}
	
	function timeupdate() {
	  var value = (100 / video.duration) * video.currentTime;
	  seek.value = value;
	}
	
	function seekpause() {
	 video.pause();
	}
	
	function seekplay() {
	  video.play();
	}
	
	function volumeadjust() {
	  video.volume = volume.value;
	}
	
	}
	
