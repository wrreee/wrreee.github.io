function Shader(vs, fs, width, height) {

   

    let shader;
    let prevFrame;
    const sketch = new p5((p) => {
        p.setup = function () {
            p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
            p.pixelDensity(1);
            p.noSmooth();

            // p.canvas.style.display = 'none'


            prevFrame = p.createGraphics(p.windowWidth, p.windowHeight);
            prevFrame.pixelDensity(1);
            prevFrame.noSmooth();


            p.background(0);
            p.stroke(255);

            shader = p.createShader(vs, fs);

            p.background(0);
            p.fill(255);

            p.rect(
                20,
                20,
                30,
                30
            );

            p.shader(shader);
            shader.setUniform("normalRes", [1.0 / width, 1.0 / p.windowHeight]);
            shader.setUniform("width", p.windowWidth);
            shader.setUniform("height", p.windowHeight);


            p.noLoop();
        };

        p.draw = function () {
            if (p.mouseIsPressed) {
                p.resetShader();
                

                p.rect(p.mouseX - p.windowWidth / 2, p.mouseY - p.windowHeight / 2, 30, 30);
            }


            p.shader(shader);
            prevFrame.image(p.get(), 0, 0);
            shader.setUniform('tex', prevFrame);

            p.rect(-p.windowWidth / 2, -p.windowHeight / 2, p.windowWidth, p.windowHeight);
        };

        p.windowResized = function() {
            resizeCanvas(p.windowWidth, p.windowHeight);
        }
    })

    return {sketch, shader, draw: () => {
        sketch.redraw()
    }};
}