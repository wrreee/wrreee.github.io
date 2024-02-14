function ShaderMask() {

    let vs = `
        attribute vec3 aPosition;
        attribute vec2 aTexCoord;
        
        varying vec2 vTexCoord;
        
        void main() {
        // copy the texcoords
        vTexCoord = aTexCoord;
        
        vec4 positionVec4 = vec4(aPosition, 1.0);
        positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
        
        gl_Position = positionVec4;
        }
    `;

    let fs = `
        #ifdef GL_ES
        precision mediump float;
        #endif
        

        varying vec2 vTexCoord; //pixel coordinates
        uniform sampler2D video; //the screen sent from the sketch
        uniform sampler2D mask; //the screen sent from the sketch
        uniform vec2 normalRes; //size of a pixel sent from the sketch
        uniform int width;
        uniform int height;
        
        void main() {
            vec2 uv = vTexCoord;
            uv.y = 1.0 - uv.y; //flip y direction

            if (texture2D(mask, uv).a > 0.0) {
                gl_FragColor = texture2D(video, uv);
            } else {
                gl_FragColor = vec4(0);
            }

            
        }
    `;

    let shader;
    let maskCanvas;
    let maskCanvasCtx;

    let videoCanvas;
    let videoCanvasCtx;

    const sketch = new p5((p) => {
        p.setup = function () {
            p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
            p.pixelDensity(1);
            p.noSmooth();

            p.canvas.style.display = 'none'


            console.log('000000000', p.windowWidth);
            videoCanvas = p.createGraphics(p.windowWidth, p.windowHeight);
            videoCanvas.pixelDensity(1);
            videoCanvas.noSmooth();
            videoCanvasCtx = videoCanvas.canvas.getContext('2d')

            maskCanvas = p.createGraphics(p.windowWidth, p.windowHeight);
            maskCanvas.pixelDensity(1);
            maskCanvas.noSmooth();
            maskCanvasCtx = maskCanvas.canvas.getContext('2d')


            p.background(0, 0, 0, 0);
            p.stroke(255);
            p.fill(255);

            shader = p.createShader(vs, fs);



            p.shader(shader);
            shader.setUniform("normalRes", [1.0 / p.windowWidth, 1.0 / p.windowHeight]);
            shader.setUniform("width", p.windowWidth);
            shader.setUniform("height", p.windowHeight);


            p.noLoop();
        };

        p.draw = function () {


            shader.setUniform('video', videoCanvas);
            shader.setUniform('mask', maskCanvas);

            p.shader(shader);
            p.rect(-p.windowWidth / 2, -p.windowHeight / 2, p.windowWidth, p.windowHeight);
        };

        p.windowResized = function () {
            // p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
    })


    console.log(sketch)
    return {
        sketch, 
        shader,
        draw: (ctx, mask, video) => {
            videoCanvasCtx.drawImage(video, 0, 0, sketch.windowWidth, sketch.windowHeight)
            maskCanvasCtx.drawImage(mask, 0, 0, sketch.windowWidth, sketch.windowHeight)
            sketch.redraw()
            ctx.drawImage(sketch.canvas, 0, 0, sketch.canvas.width, sketch.canvas.height)
        },
        clear: () => {
            videoCanvasCtx.clearRect(0, 0, sketch.windowWidth, sketch.windowHeight)
            maskCanvasCtx.clearRect(0, 0, sketch.windowWidth, sketch.windowHeight)
        }
    };
}