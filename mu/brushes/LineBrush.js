function LineBrush(canvases, audio, menuColor) {


    const canvas1 = canvases.add('LineBrush-canvas1');
    const canvas1Ctx = canvas1.getContext('2d');
    
    this.animationLoop = new AnimationLoop((t, elapsedm, dt) => {

        canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
            
        const audioVal =  Math.max(audio?.getValue(), 10);

        canvas1Ctx.lineWidth = audioVal / 5;
        canvas1Ctx.strokeStyle = menuColor.opacity(1);
        canvas1Ctx.stroke();
        canvas1Ctx.lineWidth = audioVal / 10;
        canvas1Ctx.strokeStyle = 'white';
        canvas1Ctx.stroke();
    });

    return {
        start: (ctx, touch) => {
            canvas1Ctx.beginPath();
            canvas1Ctx.moveTo(touch.start.x, touch.start.y);
            this.animationLoop.start();
        },
        move: (ctx, touch) => {
            const audioVal =  audio?.getValue();
            const d = (audioVal/ 255 * audioVal/255)* 300;
            canvas1Ctx.lineTo(
                touch.current.x + (Math.random() -0.5)* d * 2, 
                touch.current.y + (Math.random() -0.5)* d * 2
            );
           
            

            // 
        
        },
        end: (ctx, touch) => {

            this.animationLoop.stop();
            ctx.drawImage(canvas1, 0, 0)
            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
        
        },
        cancel: () => { 
            this.animationLoop.stop();
            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
        
        },
    }
}