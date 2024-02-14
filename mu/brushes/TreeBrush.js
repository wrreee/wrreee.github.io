function TreeBrush(canvases, audio, menuColor) {
    const tree = new Tree();


    this.menuColor = menuColor
    const canvas1 = canvases.add('treeTwo-canvas1');
    const canvas1Ctx = canvas1.getContext('2d');
    const canvas2 = canvases.add('treeTwo-canvas2');
    const canvas2Ctx = canvas2.getContext('2d');

    this.animationLoop = new AnimationLoop((t, elapsedm, dt) => {
        // console.log(dt)
       
        tree.grow(canvas2Ctx);
        
        // tree.drawTree(canvas2Ctx, audio?.getValue());

        console.log(this.menuColor.opacity(1))
        for (let i = 0; i < tree.branches.length; i++) {
            // console.log(data)
            // const val = data ? (data) * 2 : 100;
            // ctx.globalCompositeOperation = "xor";  
            canvas2Ctx.lineWidth = 2;
            // console.log(`rgb(0, ${data[0]}, ${256 - data[0]})`)
            canvas2Ctx.strokeStyle = this.menuColor.value;
            const branch = tree.branches[i]
            branch.draw(canvas2Ctx);
            
                    
        }
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