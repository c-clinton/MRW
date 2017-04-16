// JavaScript Document

(function() {

	
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
  this.seek.value = value;
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

})();