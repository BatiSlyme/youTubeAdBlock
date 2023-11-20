const interval = setInterval(function () {
    console.log('waitfor ad');
    const ad = [...document.querySelectorAll('.ad-showing')][0];
    if (ad) {
        const video = document.querySelector('video');
        video.currentTime = Number.MAX_VALUE;
    }
    const skip = document.querySelector('button[class="ytp-ad-skip-button-modern ytp-button"]');
    if (skip) {
        skip.click();
    }
    return () => clearInterval(interval);
}, 1000);
