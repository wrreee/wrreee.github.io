function VideoCloudBrush(canvases, video) {
    // const video = new Video();
    const shaderCloud = new ShaderCloud();


    
    const canvas2 = canvases.add('VideoCloudBrush-canvas2');
    const canvas2Ctx = canvas2.getContext('2d');
    const canvas1 = canvases.add('VideoCloudBrush-canvas1');
    const canvas1Ctx = canvas1.getContext('2d');

    const canvas3 = canvases.add('VideoCloudBrush-canvas3');
    const canvas3Ctx = canvas3.getContext('2d');

    let from;
    let to;

    let touches = {}

    this.animationLoop = new AnimationLoop((t, elapsedm, dt) => {
        // console.log(dt)
       
        // draw(canvas2Ctx);

        // console.log(canvas2Ctx.getImageData(0, 0, 100, 100))
        if (Object.keys(touches).filter(key => touches[key]).length) {
            shaderCloud.draw(canvas3Ctx, Object.keys(touches).filter(key => touches[key]).map(key => touches[key]), video.videoEl)
        }
    });

    return {
        init: () => {
            video.init()
        },
        start: (ctx, touch) => { 
            console.log(touch)
            touches[touch.identifier] = {
                from: touch.start
            }
            from = touch.start

            this.animationLoop.start();
        },
        move: (ctx, touch) => {
            touches[touch.identifier].to = touch.current
            to = touch.current;

            // canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
            
            
        },
        end: (ctx, touch) => {

            this.animationLoop.stop();
            // ctx.globalCompositeOperation = "source-over";  
            ctx.drawImage(canvas3, 0, 0, canvas3.width, canvas3.height)


            canvas3Ctx.clearRect(0, 0, canvas3.width, canvas3.height);
            shaderCloud.clear();


            touches[touch.identifier] = undefined
            from = null;
            to = null;
        },
        cancel: (ctx, touch) => {
            this.animationLoop.stop();
            
            canvas3Ctx.clearRect(0, 0, canvas3.width, canvas3.height);
            shaderCloud.clear();

            touches = {}
            from = null;
            to = null;
        },
    }
}