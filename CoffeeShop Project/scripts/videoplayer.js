function initializeVideoPlayerControls() {
    var video = document.getElementById('videoplayer');

    function playVideo(event) {
        button = event.target;
        if (video.paused) {
            video.play();
            button.textContent = "Pause";
        } else {
            video.pause();
            button.textContent = "Play";
        }
    }
    function seekVideo(numberOfSeconds) {
        try{
        if(numberOfSeconds == 0){
            video.currentTime = numberOfSeconds
        }else{
            video.currentTime += numberOfSeconds;
        }
    }catch(err){
        displayError("Something went wrong...");
    }
    }
    document.getElementById('playbutton').addEventListener('click', playVideo, false);
    document.getElementById('backbutton').addEventListener('click', function() {
        seekVideo(-5);
    }, false);
    document.getElementById('slowerbutton').addEventListener('click', function() {
        video.playbackRate -= .25
    }, false);
    document.getElementById('fasterbutton').addEventListener('click', function() {
        video.playbackRate += .25
    }, false);
    document.getElementById("mutebutton").addEventListener('click', function(s) {
        if (video.muted) {
            video.muted = false;
        } else {
            video.muted = true;
        }
    },false);
}