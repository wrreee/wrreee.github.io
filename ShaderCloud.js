function ShaderCloud() {
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
        uniform vec2 from; //the screen sent from the sketch
        uniform vec2 to; //the screen sent from the sketch
        uniform vec2 normalRes; //size of a pixel sent from the sketch
        uniform int width;
        uniform int height;
        
        void main() {
            vec2 uv = vTexCoord;
            uv.y = 1.0 - uv.y; //flip y direction


            vec2 f = from * normalRes;
            vec2 t = to * normalRes;
            vec2 centerOval = f;
            vec2 radiusOval = vec2(abs(f.x - t.x), abs(f.y - t.y));
            float e1 =  ( uv.x - centerOval.x ) / ( radiusOval.x );
            float e2 =  ( uv.y - centerOval.y ) / ( radiusOval.y );
            
            float dist  = (e1 * e1) + (e2 * e2);

            // vec2 f = from * normalRes;
            // vec2 t = to * normalRes;
            // vec2 centerOval = ( f + t ) * 0.5;
            // vec2 radiusOval = vec2(abs(f.x - t.x) / 2.0, abs(f.y - t.y) / 2.0);
            // float e1 =  ( uv.x - centerOval.x ) / ( radiusOval.x );
            // float e2 =  ( uv.y - centerOval.y ) / ( radiusOval.y );
            
            // float dist3  = (e1 * e1) + (e2 * e2);


            // float dist2 = distance(from * normalRes, uv) / distance(from * normalRes,  to * normalRes);
            
            
        
            if (dist < 1.0) {
                gl_FragColor = vec4(
                    texture2D(video, uv).xyz * (1.0 - sqrt(dist)), 
                    1.0 - sqrt(dist) 
                );
            } else {
                gl_FragColor = vec4(0.0);
            }


            
        }
    `;

    let shader;
    let touches;
    let from = null, to = null;

    let videoCanvas;
    let videoCanvasCtx;

    const sketch = new p5((p) => {
        p.setup = function () {
            p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
            p.pixelDensity(1);
            p.noSmooth();

            p.canvas.style.display = 'none'


            videoCanvas = p.createGraphics(p.windowWidth, p.windowHeight);
            videoCanvas.pixelDensity(1);
            videoCanvas.noSmooth();
            videoCanvasCtx = videoCanvas.canvas.getContext('2d')

            // maskCanvas = p.createGraphics(p.windowWidth, p.windowHeight);
            // maskCanvas.pixelDensity(1);
            // maskCanvas.noSmooth();
            // maskCanvasCtx = maskCanvas.canvas.getContext('2d')


            p.background(0, 0, 0, 0);
            // p.stroke(0);
            // p.fill(0);

            shader = p.createShader(vs, fs);



            p.shader(shader);
            shader.setUniform("normalRes", [1.0 / p.windowWidth, 1.0 / p.windowHeight]);
            shader.setUniform("width", p.windowWidth);
            shader.setUniform("height", p.windowHeight);


            p.blendMode(p.REPLACE);
            
            p.noLoop();
        };

        p.draw = function () {
            p.resetShader()
            p.fill(0, 0, 0, 0);
            p.rect(-p.windowWidth / 2, -p.windowHeight / 2, p.windowWidth, p.windowHeight);
            
            // p.clear()
            shader.setUniform('video', videoCanvas);
            // console.log(touches?.reduce((acc, {to}) => to ? [...acc, to.x, to.y] : acc,[]));
            
            // touches?.length && shader.setUniform('afrom', touches.reduce((acc, {from}) => [...acc, from.x, from.y],[]));
            // touches?.length && shader.setUniform('ato', touches.reduce((acc, {to}) => to ? [...acc, to.x, to.y] : acc,[]));

            // from && to && console.log([from.x, from.y], [to.x, to.y])
            from && shader.setUniform('from', [from.x, from.y]);
            to && shader.setUniform('to', [to.x, to.y]);

            if (from && to) {
            p.shader(shader);
            p.rect(-p.windowWidth / 2, -p.windowHeight / 2, p.windowWidth, p.windowHeight);
            }
        };

        p.windowResized = function () {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
    })

    return {
        sketch, 
        shader,
        draw: (ctx, t, video) => {
            touches=t
            from = t[0].from;
            to = t[0].to;
            // console.log(from, to)
            videoCanvasCtx.drawImage(video, 0, 0, sketch.windowWidth, sketch.windowHeight)
            
            sketch.redraw()
            ctx.clearRect(0, 0, sketch.windowWidth, sketch.windowHeight)
            ctx.drawImage(sketch.canvas, 0, 0, sketch.canvas.width, sketch.canvas.height)
        },
        clear: () => {
            touches=[]
            from = null;
            to = null;
            videoCanvasCtx.clearRect(0, 0, sketch.windowWidth, sketch.windowHeight)
        }
    };
}