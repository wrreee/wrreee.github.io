function Leaf(startPos, r) {
    this.reached = false;

    const min = -r;
    const max = r;
    
    this.pos = startPos.clone().add(new Victor(
        Math.floor(Math.random() * (max - min + 1) + min),
        Math.floor(Math.random() * (max - min + 1) + min)
    ))

}