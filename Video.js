function Video() {

    this.videoEl = document.createElement('video');
    this.videoEl.setAttribute('playsinline', '');
    this.videoEl.setAttribute('autoplay', '');
    this.videoEl.setAttribute('muted', '');
    this.videoEl.style.width = '100vw';
    this.videoEl.style.height = '100vh';
    this.videoEl.style.position = 'absolute';

    function hasGetUserMedia() {
        return !!(navigator.mediaDevices.getUserMedia);
    }

    const startStreamedVideo = (stream) => {
        this.videoEl.srcObject = stream;

        this.videoEl.onloadedmetadata = (e) => {
            this.videoEl.play();
        };
    }
    const stopStreamedVideo = () => {
        const stream = this.videoEl.srcObject;
        const tracks = stream?.getTracks();

        tracks?.forEach((track) => {
            track.stop();
        });

        this.videoEl.srcObject = null;
    }

    const getStream = (constraints) => navigator.mediaDevices.getUserMedia(constraints)


    let devs = [];
    let device = null;
    const getDevs = () => {
        if (navigator.mediaDevices.enumerateDevices) {
            return navigator.mediaDevices.enumerateDevices().then(
                (devices) => {
                    devices.forEach(function (device) {

                        if (device.kind == "videoinput") {
                            devs.push(device)
                        }
                    })
                    device = 0;
                    return devs;
                }
            );
        }

    }


    let inited = false;
    this.init = () => {
        if (hasGetUserMedia()) {
            var constraints = {
                audio: false,
                video: { facingMode: "user" }
            };

            return getStream(constraints).then((stream) => {
                return getDevs().then((devs) => {
                    var constraints = {
                        audio: false,
                        video: { deviceId: { exact: devs[0].deviceId } }
                    };
                    return getStream(constraints).then((stream) => {
                        inited = true;
                        return stream;
                    });
                })

            });

        }


    }


    this.start = (onDone) => {
        stopStreamedVideo();

        if (!inited) {
            this.init()?.then((stream) => {
                startStreamedVideo(stream)
                onDone?.(device)
            })
        } else {
            var constraints = {
                audio: false,
                video: { deviceId: { exact: devs[device].deviceId } }
            };
            getStream(constraints)?.then((stream) => {
                startStreamedVideo(stream)
                onDone?.(device)
            })
        }
    }

    this.stop = (onDone) => {
        stopStreamedVideo();
        onDone?.();
    }


    this.getValue = () => {

        return this.videoEl;
    }

    this.nextSrc = (onDone) => {
        device = (device + 1) % devs.length;
        var constraints = {
            audio: false,
            video: { deviceId: { exact: devs[device].deviceId } }
        };
        stopStreamedVideo();
        getStream(constraints)?.then((stream) => {
            startStreamedVideo(stream)
            onDone?.(device)
        })
    }
}