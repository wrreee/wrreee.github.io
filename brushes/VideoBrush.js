function VideoBrush(canvases, video) {
    // const video = new Video();
    // const tree = new Tree();
    const shaderMask = new ShaderMask();


    const canvas1 = canvases.add('VideoBrush-canvas1');
    const canvas1Ctx = canvas1.getContext('2d');

    const canvas2 = canvases.add('VideoBrush-canvas2');
    const canvas2Ctx = canvas2.getContext('2d');


    this.animationLoop = new AnimationLoop((t, elapsedm, dt) => {
        canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
        canvas2Ctx.clearRect(0, 0, canvas2.width, canvas2.height);
            
        canvas1Ctx.setLineDash([20, 20]);
        // canvas1Ctx.lineJoin = "bevel";
        // canvas1Ctx.lineCap = "round";
        canvas1Ctx.lineWidth =  canvas1.width / 10;
        canvas1Ctx.strokeStyle = 'white';
        canvas1Ctx.stroke();

        shaderMask.draw(canvas2Ctx, canvas1, video.videoEl)
    });

    return {
        
        start: (ctx, touch) => { 
            canvas1Ctx.beginPath();
            canvas1Ctx.moveTo(touch.start.x, touch.start.y);
            this.animationLoop.start();
        },
        move: (ctx, touch) => {
            canvas1Ctx.lineTo(
                touch.current.x, 
                touch.current.y
            );
            
        },
        end: (ctx, touch) => {

            this.animationLoop.stop();
            ctx.drawImage(canvas2, 0, 0)
            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
            canvas2Ctx.clearRect(0, 0, canvas2.width, canvas2.height);
            shaderMask.clear();
        },
        cancel: () => {
            this.animationLoop.stop();
            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
            canvas2Ctx.clearRect(0, 0, canvas2.width, canvas2.height);
        
            shaderMask.clear();
        },
    }
}