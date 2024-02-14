function MenuVideo(onVideoSrcChange) {


    const videoSrc = document.createElement('div');
    videoSrc.className = 'videoSrc'
    videoSrc.style = `
        position: absolute;
        width: 22vw;
        height: 16vw;
        right: 0px;
        top: 0px;
        background: radial-gradient(#ff00002e, transparent);
        // color: white;
        color: rgba(255, 235, 134, 0.0);
        text-shadow: white 0px 0px 2vw;
        display: flex;
        justify-content: flex-end;
        visibility: hidden;
    `


    videoSrc.addEventListener('touchstart', () => {
        onVideoSrcChange()?.then((src) => {
            this.setVideoSrc(src)
        });
    })


    this.el = videoSrc;

    this.setVideoSrc = (src) => {
        if (src !== null) {
            videoSrc.textContent = src;
            videoSrc.style.visibility = 'inherit'
        } else {
            videoSrc.textContent = src;
            videoSrc.style.visibility = 'hidden'
        }
       
    }

}