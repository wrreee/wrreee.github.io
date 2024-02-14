function FlowerBrush(canvases, audio, menuColor) {
    // const audio = new Audio();
    const tree = new Tree('flower2');
    
    const canvas1 = canvases.add('FlowerBrush-canvas1');
    const canvas1Ctx = canvas1.getContext('2d');
    const canvas2 = canvases.add('FlowerBrush-canvas2');
    const canvas2Ctx = canvas2.getContext('2d');

    this.menuColor = menuColor
    const drawTree = (ctx, data) => {
        
        for (let i = 0; i < tree.branches.length; i++) {
            // console.log(data)
            // const val = data ? (data) * 2 : 100;
            ctx.globalCompositeOperation = "xor";  
            ctx.lineWidth = 2 + Math.random() * 3;
            // console.log(`rgb(0, ${data[0]}, ${256 - data[0]})`)
            ctx.strokeStyle = this.menuColor.rand(30);// `rgb(0, ${val}, ${256 - val})`;
            const branch = tree.branches[i]
            branch.draw(ctx);
            
                    
        }
    }

    this.animationLoop = new AnimationLoop((t, elapsedm, dt) => {
        // console.log(dt)
        tree.grow(canvas2Ctx);
        drawTree(canvas2Ctx, audio?.getValue());
    });

    return {
        start: (ctx, touch) => { 
            tree.start(Victor.fromObject(touch.start))

            this.animationLoop.start();
        },
        move: (ctx, touch) => {
            tree.addPoint(Victor.fromObject(touch.current), audio?.getValue())

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