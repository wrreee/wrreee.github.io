
function Canvases() {
    this.el = document.getElementById('canvases');

    this.list = {}

    this.updateSize = function () {
        console.log(this.list)
        Object.values(this.list).forEach(canvas => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        })
    }

    this.init = function () {
        this.updateSize();
        // window.addEventListener('resize', this.updateSize.bind(this))
    }

    this.add = function(name) {
        const canvas = document.createElement('canvas');
        
        canvas.id = name;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        this.list[name] = canvas;

        this.el.appendChild(canvas);
        console.log(name, canvas);

        return canvas;
    }

    this.init()
}