document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        this.textContent = 'إيقاف';
    } else {
        audio.pause();
        this.textContent = 'تشغيل الصوت';
    }
});
