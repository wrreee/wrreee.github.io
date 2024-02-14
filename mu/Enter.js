function Enter(el) {
    this.el = el;


    el.style = `
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(149, 149, 255, 0.22);
    `
    const box = document.createElement('div');
    // inside.className = 'box'
    box.style = `
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: space-between;
    background: rgba(255, 197, 197, 0.65);
        
    `

    const locks = [0, 1, 2].map((i) => {
        const lock = document.createElement('div');
        lock.className = 'lock'
        lock.style = `
            height: ${{ 0: 33, 1: 34, 2: 33 }[i]}vh;
        `

        return lock
    })

    let prevLock = null;
    const pass = [2, 1, 0, 1, 0, 1, 2];
    let passPointer = 0;
    box.addEventListener('touchmove', (e) => {
        const el = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);

        const index = locks.indexOf(el);
        // console.log(el !== prevLock ? '-----------------------------' : '--------------')
        if (el !== prevLock && index !== -1) {

            if (pass[passPointer] === index) {
                // console.log(passPointer, index, pass[passPointer] === index)
                passPointer++;
            } else {
                // console.log(passPointer, index, pass[passPointer] === index)
                passPointer = 0;
            }
            if (passPointer === pass.length) {
                console.log('goood')
                this.el.style.display = 'none'
                passPointer = 0;
                prevLock = null;
            } else {

                prevLock = el;
            }
        }


    })
    box.addEventListener('touchend', () => {
        passPointer = 0;
                prevLock = null;
    })
    box.addEventListener('touchcancel', () => {
        passPointer = 0;
                prevLock = null;
    })
    locks.forEach((lock) => box.appendChild(lock))

    el.appendChild(box)

}