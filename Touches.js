
function Touches(canvas, handlers) {

    this.handlers = handlers;

    const ongoingTouches = [];

    function log(msg) {
        // console.log(msg)
        // const container = document.getElementById("log");
        // container.textContent = `${msg} \n${container.textContent}`;
    }

    function startTouch({ identifier, pageX, pageY }, time) {
        console.log('startTouch')
        return {
            identifier,
            start: {
                x: pageX,
                y: pageY,
                t: time,
            },
            prev: null,
            current: {
                x: pageX,
                y: pageY,
                t: time,
            },
        };
    }

    function moveTouch(prevTouch, { pageX, pageY }, time) {
        return {
            ...prevTouch,
            prev: prevTouch.current || prevTouch.start,
            current: {
                x: pageX,
                y: pageY,
                t: time,
            }
        };
    }

    function ongoingTouchIndexById(idToFind) {
        for (let i = 0; i < ongoingTouches.length; i++) {
            const id = ongoingTouches[i].identifier;

            if (id === idToFind) {
                return i;
            }
        }
        return -1; // not found
    }

    const handleStart = (evt) => {
        evt.preventDefault();
        log("touchstart.");
        const el = canvas;
        const ctx = el.getContext?.("2d");
        const touches = evt.changedTouches;
        const t = new Date().getTime();

        // console.log(222, t)

        for (let i = 0; i < touches.length; i++) {
            log(`touchstart: ${i}.`);
            const newTouch = startTouch(touches[i], t);

            ongoingTouches.push(newTouch);

            log(this)
            this.handlers?.start(ctx, newTouch);
        }
    }

    const handleMove = (evt) => {
        evt.preventDefault();
        const el = canvas;
        const ctx = el.getContext?.("2d");
        const touches = evt.changedTouches;
        const t = new Date().getTime();

        for (let i = 0; i < touches.length; i++) {
            const idx = ongoingTouchIndexById(touches[i].identifier);

            if (idx >= 0) {
                log(`continuing touch ${idx}`);
                const currentTouch = moveTouch(ongoingTouches[idx], touches[i], t);

                ongoingTouches.splice(idx, 1, currentTouch); // swap in the new touch record

                this.handlers?.move(ctx, currentTouch);

            } else {
                log("can't figure out which touch to continue");
            }
        }

        log(ongoingTouches[0])
    }

    const handleEnd = (evt) => {
        evt.preventDefault();
        log("touchend");
        const el = canvas;
        const ctx = el.getContext?.("2d");
        const touches = evt.changedTouches;
        const t = new Date().getTime();

        for (let i = 0; i < touches.length; i++) {
            let idx = ongoingTouchIndexById(touches[i].identifier);

            if (idx >= 0) {
                const currentTouch = moveTouch(ongoingTouches[idx], touches[i], t);
                ongoingTouches.splice(idx, 1); // remove it; we're done

                this.handlers?.end(ctx, currentTouch);
            } else {
                log("can't figure out which touch to end");
            }
        }

        log(ongoingTouches[0])
    }

    const handleCancel = (evt) => {
        evt.preventDefault();

        const el = canvas;
        const ctx = el.getContext?.("2d");
        log("touchcancel.");
        const touches = evt.changedTouches;
        const t = new Date().getTime();

        for (let i = 0; i < touches.length; i++) {
            let idx = ongoingTouchIndexById(touches[i].identifier);
            const currentTouch = moveTouch(ongoingTouches[idx], touches[i], t);

            this.handlers?.cancel(ctx, currentTouch);

            ongoingTouches.splice(idx, 1); // remove it; we're done
        }
    }

    console.log(11111)
    canvas.addEventListener("touchstart", handleStart);
    canvas.addEventListener("touchend", handleEnd);
    canvas.addEventListener("touchcancel", handleCancel);
    canvas.addEventListener("touchmove", handleMove);

    this.setHandlers = function(handlers) {
        this.handlers = handlers
    }


    this.cancel = () => {
        const el = canvas;
        const ctx = el.getContext?.("2d");

        this.handlers?.cancel(ctx);
    }

}