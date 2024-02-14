function FromCenter(_, menuColor) {
    this.menuColor = menuColor
    return {
        start: (ctx, touch) => {
            // const color = this.menuColor.rand();
            ctx.beginPath();
            // ctx.arc(touch.current.x, touch.current.y, 4, 0, 2 * Math.PI, false); // a circle at the start
            // ctx.fillStyle = color;
            // ctx.fill();
        },
        move: (ctx, touch) => {

            const color = this.menuColor.rand(30);
            ctx.beginPath();
            ctx.moveTo(touch.start.x, touch.start.y);
            ctx.lineTo(touch.current.x, touch.current.y);
            ctx.lineWidth = 4;
            ctx.strokeStyle = color;
            ctx.stroke();
        },
        end: (ctx, touch) => {
            // const color = colorForTouch(touch.current);
            // ctx.lineWidth = 4;
            // ctx.fillStyle = color;
            // ctx.beginPath();
            // ctx.moveTo(touch.start.x, touch.start.y);
            // ctx.lineTo(touch.current.x, touch.current.y);
            // ctx.fillRect(touch.current.x - 4, touch.current.y - 4, 8, 8); // and a square at the end
        },
        cancel: () => { },
    }
}