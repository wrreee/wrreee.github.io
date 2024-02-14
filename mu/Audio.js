function Audio(onFrame) {

    let analyser;
    let stream;
    function hasGetUserMedia() {
        return !!(navigator.mediaDevices.getUserMedia);
    }

    function gotStream(s) {
        stream = s
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var audioContext = new AudioContext();

        // Create an AudioNode from the stream.
        var mediaStreamSource = audioContext.createMediaStreamSource(stream);

        // Connect it to the destination to hear yourself (or any other node for processing!)
        // mediaStreamSource.connect(audioContext.destination);

        // analyser
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 1024;

        // pipe
        mediaStreamSource.connect(analyser);
    }


    this.start = () => {
        if (hasGetUserMedia()) {
            navigator.mediaDevices.getUserMedia( {audio:true} ).then((...args) => {
                gotStream(...args)
                // loop()
            } );
    
            
        }
    }

    this.stop = () => {
        const tracks = stream?.getTracks();

        tracks?.forEach((track) => {
            track.stop();
        });
        stream = undefined;
    }
    
    function getAverageVolume(array) {
        var values = 0;
        var average;

        var length = array.length;

        // get all the frequency amplitudes
        for (var i = 0; i < length; i++) {
            values += array[i];
        }

        average = values / length;
        return average;
  }

    this.getValue = function() {
        var data = new Uint8Array(256);
        analyser?.getByteFrequencyData(data);
        const avg = getAverageVolume(data);
        console.log('22-------------------------',avg)
        return avg
    }


   
}