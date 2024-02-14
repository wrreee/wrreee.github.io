
function colorForTouch(touch) {
    return `hsl(60 0% 0%)`;
}

function main() {
    // window.screen.orientation.lock?.("portrait");


    // const enter = new Enter(document.getElementById('enter'))

    const canvases = new Canvases();
    const mainCanvas = canvases.add('main');
    const video = new Video();
    const audio = new Audio();

    const menuVideo = new MenuVideo(() => video.nextSrc((device) => {
        menuVideo.setVideoSrc(device);
    }));


    const menuColor = new MenuColor(video, menuVideo);



    console.log(menuColor)

    const brushes = {
        fromCenter: new FromCenter(canvases, menuColor),
        circle: new Circle(canvases, menuColor),
        tree: new TreeBrush(canvases, audio, menuColor),
        flower: new FlowerBrush(canvases, audio, menuColor), 
        grasBrush: new GrasBrush(canvases, audio, menuColor),
        videoBrush: new VideoBrush(canvases, video),
        videoTreeBrush: new VideoTreeBrush(canvases, video),
        videoCloudBrush: new VideoCloudBrush(canvases, video),
        videoEllipseBrush: new VideoEllipseBrush(canvases, video),
        lineBrush: new LineBrush(canvases, audio, menuColor),
        line2Brush: new Line2Brush(canvases, audio, menuColor),
    }

    const currentBrush = 'fromCenter';
    const touches = new Touches(mainCanvas, brushes.fromCenter);

    const menu = new Menu(
        document.getElementById('menu'),
        {
            'videoCloudBrush': 'oo',
            'videoEllipseBrush': 'OO',
            'lineBrush': '--^--',
            'line2Brush': '-===-',
            'fromCenter': '****',
            'circle': 'O',
            'tree': '-<',
            "flower": '><',
            'grasBrush': '|',
            'videoBrush': 'o',
            'videoTreeBrush': 'o-<',
            'download': 'D',
            // 'download2': '__'
        },
        (name) => {
            if (name === 'download') {

                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = mainCanvas.width;
                canvas.height = mainCanvas.height;


                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                ctx.drawImage(mainCanvas, 0, 0);

                let downloadLink = document.createElement('a');
                downloadLink.setAttribute('download', 'CanvasAsImage.png');
                let dataURL = canvas.toDataURL('image/png');
                let url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
                downloadLink.setAttribute('href', url);
                downloadLink.click();

            } else if (name === 'download2') {


                let downloadLink = document.createElement('a');
                downloadLink.setAttribute('download', 'CanvasAsImage.png');
                let dataURL = mainCanvas.toDataURL('image/png');
                let url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
                downloadLink.setAttribute('href', url);
                downloadLink.click();

            } else if (brushes[name]) {
                touches.handlers.cancel();

                if ([
                    'videoBrush',
                    'videoTreeBrush',
                    'videoCloudBrush',
                    'videoEllipseBrush'
                ].includes(name)) {
                    video.start((device) => {
                        menuVideo.setVideoSrc(device);
                    });
                } else {
                    video.stop(() => {
                        menuVideo.setVideoSrc(null);
                    });
                }
                if ([
                    'tree',
                    'flower',
                    'grasBrush',
                    'lineBrush',
                    'line2Brush'
                ].includes(name)) {
                    audio.start();
                } else {
                    audio.stop();
                }

                touches.setHandlers(brushes[name])

                

            }
            
        },
    );

    menu.inside.appendChild(menuVideo.el)
    menu.inside.appendChild(menuColor.el)


}

// const initAudio = () => {
//     document.removeEventListener('click', initAudio)
//     const audio = new Audio();

//     new Video(document.getElementById('video'))

//     main(audio)
// }


// main()

document.addEventListener("DOMContentLoaded", main);

// оттенки красного
// генерация квазислучайного цвета при старте 
//    -> градиентный стек цветов который смещается каждый кадр (из него берется цвет)
//    -> отклонение от него в зависимости от координат

/**
 * уголок при нажатии на него открывается палитра, если отпустить
 * 1 на уугглу - переключение режима цввета
 * 2 на палитре - изменение цвета
 * 3 вывести за палитру - палитра сскрывается цвет определяетсяс пипеткой
 *
 * режимы цвета - const, ф(т), с/без отклонений координат,
 */

// переключение видов кистей
// два вида разброса красного 
// время, - размер,
// радиус, - размер
// Дх, - яркость
// Ду, - 
// х, - яркость
// у, - 


/**
    кисти

    1 камернаая
        с массштабом
        1-1-1 форма прямоугольник по диагонали
        1-1-2 форма многоугольник
        без масштаба
        1-2-1 форма прямоугольник по диагонали
        1-2-2 форма многоугольник


    1 камернаая
    2 песок
    3 ветки
    4 цветы
    5 


 */

/**
    рефакторинг дерева

        функции - 
            добавление листьев (и начальных веток)
                до предела
                очередь
            grow
                1 поворот веток к ближайшему листу
                2 удаление достигнутыв листов
                3 отращиавние веток у которых нашлись ближайшие листья


        цвет веток 
            параметры цвета генерируется при старте
                color1 color2
        риисование вветок один раз

    функция рандом от времении

*/

/**
 * 

    кисти
        виды веток

 
    песок
        фидбэк шейдер
        клеточный автомат 
        виды песка

    цветы



 */

    /**
     * 
      вветтки 
      цветы
      облака


      слова

     */

      /**
       * 
       старт медиа при выборе пункта в меню
       video.start()
       audio...()

       
       */

       /**
        ++иконка
        ++название
        ++мультитач
        +выбор камеры
        +выключение камеры при смене кисти
        +++линия с разбросом точек на основе звука
        +++непрерывность линии
        

        праввильный элипс


        цветок

        контент
            названия
            иконка
            имя сохранения
            белый фон сохранения
            +++праильное вывчисление громкости  аудио
            кисти
                ++элипс камера (размытый, неразмытый)
                ++камера круглая линия непрерывная камера 
                    со звуком (
                    несколько размеров)

                линия с разбросом точек на основе звука 
                    несколько (размеров)
                    цвет

                ветки 
                    цвет глобальный 
                    разброс цвета от микрофона
                


        githubpages
        */

const a = () => {


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


    // the fragment shader is called for each pixel
    /**
     
        010
        000    
     */
    let fs = `
    #ifdef GL_ES
    precision mediump float;
    #endif
    

    varying vec2 vTexCoord; //pixel coordinates
    uniform sampler2D tex; //the screen sent from the sketch
    uniform vec2 normalRes; //size of a pixel sent from the sketch
    uniform int width;
    uniform int height;
    
    void main() {


        vec2 uv = vTexCoord;
        uv.y = 1.0 - uv.y; //flip y direction

        bool isEdge = (1.0 - uv.y) / normalRes.y < 1.00;

        vec4 color = texture2D(tex, uv);
        vec4 colorAbove = texture2D(tex, uv - vec2(0.0, 1.0 * normalRes.y));
        vec4 colorBelow = texture2D(tex, uv + vec2(0.0, 1.0 * normalRes.y));

        if (color.r > 0.0 && colorBelow.r < 1.0) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        } else if (colorAbove.r > 0.0 && color.r < 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        } else if (color.r > 0.0 && colorBelow.r > 0.0) {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        } else {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
        if (isEdge) {
            if (color.r > 0.0) {
                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            } else if (colorAbove.r > 0.0 && color.r < 1.0) {
                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            } else {
                gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            }
        }
    }
    `;

    let shader;
    let prevFrame;
    const sketch = new p5((p) => {
        const width = 700
        const height = 410

        let x = 100;
        let y = 100;

        p.setup = function () {
            p.createCanvas(width, height, p.WEBGL);
            p.pixelDensity(1);
            p.noSmooth();


            prevFrame = p.createGraphics(width, height);
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
            shader.setUniform("normalRes", [1.0 / width, 1.0 / height]);
            shader.setUniform("width", width);
            shader.setUniform("height", height);
        };

        p.draw = function () {
            if (p.mouseIsPressed) {
                p.resetShader();
                // p.po
                console.log(p.mouseX - width / 2, p.mouseY - height / 2)


                p.rect(p.mouseX - width / 2, p.mouseY - height / 2, 30, 30);
            }


            p.shader(shader);
            prevFrame.image(p.get(), 0, 0);
            shader.setUniform('tex', prevFrame);

            p.rect(-width / 2, -height / 2, width, height);
        };
    })

}