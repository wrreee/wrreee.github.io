function MenuColor(video, menuVideo) {


    const el = document.createElement('div');
    
    this.el = el;

    // this.valueArray = [...[0,1,2].map(() => 100+Math.random()* 150), Math.random()]
    this.valueArray = [255, 0, 0, 1]
    this.value = `rgba(${this.valueArray?.[0]},
        ${this.valueArray?.[1]},
        ${this.valueArray?.[2]},
        ${1})
    `;
    this.opacity = (o) => {
        return `rgba(${this.valueArray?.[0]},
            ${this.valueArray?.[1]},
            ${this.valueArray?.[2]},
            ${o})
        `
    }
    this.rand = (o) => {
        return `rgba(${this.valueArray?.[0] + (Math.random() - 0.5)*o},
            ${this.valueArray?.[1] + (Math.random() - 0.5)*o},
            ${this.valueArray?.[2] + (Math.random() - 0.5)*o},
            ${1})
        `
    }

    el.className = 'menuColor'
    el.style = `
        position: absolute;
        width: 22vw;
        height: 16vw;
        right: 0px;
        top: 16vh;
        background: radial-gradient(#ff00002e, transparent);
        background: radial-gradient(${this.value}, transparent);
        // color: white;
        color: rgba(255, 235, 134, 0.0);
        text-shadow: white 0px 0px 2vw;
        display: flex;
        justify-content: flex-end;
        // visibility: hidden;
    `
    // el.style.background = `radial-gradient(${this.value}, transparent)`;

    const canvas = document.createElement('canvas');
    canvas.style = `
        position: absolute;
        width: 50vw;
        height: 50vh;
        left: 100%;
        top: 100%;
        
    `
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const pick = (ctx, x, y) => {
        const pixel = ctx.getImageData(x, y, 1, 1);
        const data = pixel.data;
      
        
        const rgbColor = `rgb(${data[0]} ${data[1]} ${data[2]} / ${data[3] / 255})`;
        

        el.style.background = rgbColor; 
        this.value = rgbColor;

        this.valueArray = [data[0], data[1], data[2], data[3]];

        return rgbColor;
      }

    this.animationLoop = new AnimationLoop((t, elapsedm, dt) => {

        const videoEl = video.getValue()
        // ctx.drawImage(
        //     videoEl,
        //     0,0,canvas.width,canvas.height)
        console.log(videoEl.videoHeight, videoEl.videoHeight/40 * 19)

       

         ctx.drawImage(
            videoEl,
            videoEl.videoWidth/5 * 2,
            videoEl.videoHeight/5 * 2,
            videoEl.videoWidth/5,
            videoEl.videoHeight/5,

            0,0,
            canvas.width,
            canvas.height, 
         )

         const color = pick(ctx, canvas.width/2, canvas.height/2)

         ctx.moveTo(canvas.width/2, 0)
         ctx.lineTo(canvas.width/2, canvas.height)

         ctx.moveTo(0, canvas.height/2)
         ctx.lineTo(canvas.width, canvas.height/2)
         ctx.lineWidth =  1;
         ctx.strokeStyle = 'red';
         ctx.stroke();

        
    });

    const touches = new Touches(el, {
        start: (_, touch) => {
            video.start((device) => {
                menuVideo.setVideoSrc(device);
            });
            this.animationLoop.start();
            el.appendChild(canvas)

            el.style.right = 'unset';
            el.style.left = 0;
        },
        move: () => {

            
        },
        end: () => {

            this.animationLoop.stop();
            video.stop(() => {
                menuVideo.setVideoSrc(null);
            });
            el.innerHTML = '';
            el.style.left = 'unset';
            el.style.right = 0;

            el.style.background = `radial-gradient(${this.value}, transparent)`;

            
        },
        cancel: () => {

            this.animationLoop.stop();
            video.stop();
        },
    });




}