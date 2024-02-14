function Menu(el, list, onSelect, onVideoSrcChange) {


    this.el = el;

    el.style = `
        font-size: 7vmax;
        // display: none;
    `

    const openMenu = document.createElement('button');
    openMenu.className = 'openMenu'
    openMenu.textContent = 'menu'
    openMenu.style = `
        font-size: inherit;
        position: absolute;
        width: 22vw;
        height: 16vw;
        left: 0px;
        top: 0px;
        overflow: hidden;
        background: radial-gradient(#ff00002e, transparent);
        border: none;
        color: transparent;
    `


    const inside = document.createElement('div');
    this.inside = inside;
    inside.className = 'inside'
    inside.style = `

        //border: 2px solid blue;
        position: absolute;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        top: 0;
        left: 0;
        visibility: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
    `

    const content = document.createElement('div');
    content.className = 'content'
    content.style = `
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(red, transparent);
        color: rgb(255 235 134 / 25%);
        text-shadow: white 0px 0px 4px;
    `

    
    Object.entries(list).forEach(([key, name]) => {
        const item = document.createElement('div');
        item.textContent = name;
        item.addEventListener('touchstart', () => {
            onSelect(key)
            inside.style.visibility = 'hidden';
        });
        content.appendChild(item)
    })

    el.appendChild(inside)
    el.appendChild(openMenu)
    inside.appendChild(content)


    openMenu.addEventListener('touchstart', () => {

        inside.style.visibility = inside.style.visibility !== 'visible' ? 'visible' : 'hidden';

        
        
    })

   
}