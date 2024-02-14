function Circle(canvases, menuColor) {
    const canvas1 = canvases.add('circleOne-canvas1');
    const canvas1Ctx = canvas1.getContext('2d');
    return {
        start: (ctx, touch) => { },
        move: (ctx, touch) => {
            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);


            const d = Victor.fromObject(touch.start).distance(Victor.fromObject(touch.current))

            canvas1Ctx.beginPath();
            canvas1Ctx.arc(touch.start.x, touch.start.y, d, 0, 2 * Math.PI);
            canvas1Ctx.fillStyle = menuColor.rand(20);
            canvas1Ctx.fill();
            
        },
        end: (ctx, touch) => {
            ctx.drawImage(canvas1, 0, 0)
            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
        },
        cancel: () => {
            canvas1Ctx.clearRect(0, 0, canvas1.width, canvas1.height);
        },
    }
}