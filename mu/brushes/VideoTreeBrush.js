function VideoTreeBrush(canvases, video) {
    // const video = new Video();
    const tree = new Tree('video1');
    const shaderMask = new ShaderMask();


    
    const canvas2 = canvases.add('VideoTreeBrush-canvas2');
    canvas2.style.visibility = 'hidden';
    const canvas2Ctx = canvas2.getContext('2d');

    const canvas3 = canvases.add('VideoTreeBrush-canvas3');
    const canvas3Ctx = canvas3.getContext('2d');
    
    const canvas1 = canvases.add('VideoTreeBrush-canvas1');
    const canvas1Ctx = canvas1.getContext('2d');

    const drawTree = (ctx, data) => {
        for (let i = 0; i < tree.branches.length; i++) {
            // console.log(data)
            const val = data ? (data) * 2 : 100;
            // ctx.globalCompositeOperation = "xor";  
            ctx.lineWidth = 10;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            // console.log(`rgb(0, ${data[0]}, ${256 - data[0]})`)
            ctx.strokeStyle = `rgb(0, ${val}, ${256 - val})`;
            const branch = tree.branches[i]
            branch.draw(ctx);
            
                    
        }
    }

    this.animationLoop = new AnimationLoop((t, elapsedm, dt) => {
        // console.log(dt)
       
        tree.grow();
        drawTree(canvas2Ctx);

        canvas3Ctx.clearRect(0, 0, canvas3.width, canvas3.height);
        // console.log(canvas2Ctx.getImageData(0, 0, 100, 100))
        shaderMask.draw(canvas3Ctx, canvas2, video.videoEl)
    });

    return {
        init: () => {
            video.init()
        },
        start: (ctx, touch) => { 
            tree.start(Victor.fromObject(touch.start))

            this.animationLoop.start();
        },
        move: (ctx, touch) => {
            tree.addPoint(Victor.fromObject(touch.current))

            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
            tree.drawHelp2(canvas1Ctx);
        
            
        },
        end: (ctx, touch) => {

            this.animationLoop.stop();

            ctx.drawImage(canvas3, 0, 0)
            // ctx.drawImage(canvas2, 0, 0)
            // ctx.drawImage(canvas1, 0, 0)

            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
            canvas2Ctx.clearRect(0, 0, canvas2.width, canvas2.height);
            canvas3Ctx.clearRect(0, 0, canvas3.width, canvas3.height);
            shaderMask.clear();
        },
        cancel: () => {
            this.animationLoop.stop();
            
            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
            canvas2Ctx.clearRect(0, 0, canvas2.width, canvas2.height);
            canvas3Ctx.clearRect(0, 0, canvas3.width, canvas3.height);
            shaderMask.clear();
        },
    }
}