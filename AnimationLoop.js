function AnimationLoop(onFrame) {
    this.onFrame = onFrame;
    this.id = null;
    let startTimeStamp, previousTimeStamp;

    this.start = function () {
        startTimeStamp = undefined;
        previousTimeStamp = undefined;
        const handler = (timeStamp) => {

            if (startTimeStamp === undefined) {
                startTimeStamp = timeStamp;
            }
            const elapsed = timeStamp - startTimeStamp;
            const dt = timeStamp - previousTimeStamp;

            this.onFrame(timeStamp, elapsed, dt);
            this.id = requestAnimationFrame(handler);
            
            previousTimeStamp = timeStamp;
        }
        this.id = requestAnimationFrame(handler);
    }

    this.stop = function () {
        cancelAnimationFrame(this.id);
    }
} 