function SandBrush(canvases) { //?>????
    const tree = new Tree();
    
    const canvas1 = canvases.add('treeTwo-canvas1');
    const canvas1Ctx = canvas1.getContext('2d');
    const canvas2 = canvases.add('treeTwo-canvas2');
    const canvas2Ctx = canvas2.getContext('2d');

    this.animationLoop = new AnimationLoop((t, elapsedm, dt) => {
        // console.log(dt)
        tree.grow(canvas2Ctx);
        tree.drawTree(canvas2Ctx);
    });

    return {
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

            // ctx.drawImage(canvas1, 0, 0)
            ctx.drawImage(canvas2, 0, 0)

            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
            canvas2Ctx.clearRect(0, 0, canvas2.width, canvas2.height);
        },
        cancel: () => {
            this.animationLoop.stop();
            
            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
            canvas2Ctx.clearRect(0, 0, canvas2.width, canvas2.height);
        },
    }
}