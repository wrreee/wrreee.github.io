document.addEventListener("DOMContentLoaded", function (event) {

    const stylier = elem => styles => Object.assign(elem.style, styles);

    const frames = document.querySelectorAll("._triple_gate .frame, ._stas .main");

    const rotateFrame = ({x}) => {
        frames.forEach(frame =>
            stylier(frame)({transform: 'rotateY(' + (x - window.innerWidth / 2) / 10 + 'deg)'}))

    };


    document.addEventListener('mousemove', rotateFrame);
});

