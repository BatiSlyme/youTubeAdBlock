const interval = setInterval(function () {
    const ad = [...document.querySelectorAll('.ad-showing')][0];
    if (ad) {
        const video = document.querySelector('video');
        video.currentTime = Number.MAX_VALUE;
    }
    return () => clearInterval(interval);
}, 1000);

