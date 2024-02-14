function Branch(parent, pos, dir) {
    this.parent = parent;
    this.pos = pos;
    this.dir = dir;
    this.count = 0;

    // console.log('NEEW B', this.dir)

    this.next = function () {
        let nextPos = this.pos.clone().add(this.dir)
        let nextBranch = new Branch(this, nextPos, this.dir.clone())
        return nextBranch;
    }

    this.draw = function (ctx) {
        if (this.parent !== null) {
            ctx.beginPath();
            ctx.moveTo(this.parent.pos.x, this.parent.pos.y);
            ctx.lineTo(this.pos.x, this.pos.y);
            ctx.stroke();
        }
    }
}