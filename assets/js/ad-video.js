const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.classList.add('pause');  // Change to pause icon
    } else {
        video.pause();
        playButton.classList.remove('pause');  // Change back to play icon
    }
});

// Sync button with video play/pause events
video.addEventListener('pause', () => {
    playButton.classList.remove('pause');  // Show play icon when paused
});

video.addEventListener('play', () => {
    playButton.classList.add('pause');  // Show pause icon when playing
});