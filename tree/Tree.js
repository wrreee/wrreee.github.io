function Tree(pointRegime) {
    this.leaves = [];
    this.branches = [];

    this.points = [];

    this.start = function(startPos) {
        this.leaves = [];
        this.branches = [];
        this.points = [];
        
        // this.branches.push(new Branch(null, startPos, new Victor(120, 120)));

        this.points.push(startPos);
        // for (let i = 0; i < 5; i++) {
        //     this.leaves.push(new Leaf(startPos, 30));
        // }
    }

    const regimes = {
        def: {
            pointDist: 100,
            pointCount: 10,
            pointRadius: 100,
            minDist: 10,
            maxDist: 200,
        },
        video1: {
            pointDist: 10,
            pointCount: 1,
            pointRadius: 100,
            minDist: 60,
            maxDist: 300,
        },
        flower: {
            pointDist: 10,
            pointCount: 1,
            pointRadius: 15,
            minDist: 10,
            maxDist: 300,
        },
        flower2: {
            pointDist: 40,
            pointCount: 2,
            pointRadius: 100,
            minDist: 10,
            maxDist: 400,
        },
    }

    const pointDist = (regimes[pointRegime] || regimes.def).pointDist
    const pointCount = (regimes[pointRegime] || regimes.def).pointCount
    const pointRadius = (regimes[pointRegime] || regimes.def).pointRadius
    const minDist = (regimes[pointRegime] || regimes.def).minDist
    const maxDist = (regimes[pointRegime] || regimes.def).maxDist

    this.addPoint = function(point, data) {
        if (point.distance(this.points[this.points.length - 1]) > pointDist) {
            // this.branches.push(new Branch(null, this.points[this.points.length - 1], point));

            this.points.push(point);
            // const newBranch = new Branch(null, newPos, branch.dir.clone())
            //     this.branches.push(newBranch)

            for (let i = 0; i < pointCount; i++) {
                this.leaves.push(new Leaf(point, pointRadius));
            }
            if (this.leaves.length > 30) {
                this.leaves.shift();
                this.leaves.shift();
            } 
            if (this.points.length > 15) {
                this.points.shift();
            } 

            if (!this.branches.length) {
                // const newBranch = new Branch(null, this.points[0], point.clone().normalize())

                const dir = point.clone().subtract(this.points[0])
                const newBranch = new Branch(null, point.clone(), dir)
                console.log('newBranch mouse', newBranch)
                // console.log('----', this.points[0], point.clone())
                this.branches.push(newBranch);
            }

        }
    }

    this.grow = function(ctx) {
        for (let i = 0; i < this.leaves.length; i++) {
            let leaf = this.leaves[i];

            let closestBranch = null;
            let record = 100000;
            for (let j = 0; j < this.branches.length; j++) {
                let branch = this.branches[j];
                let d = leaf.pos.distance(branch.pos)
                if (d < minDist) {
                    leaf.reached = true;
                    closestBranch = null;
                    break;
                } else if (d > maxDist) {

                } else if (closestBranch == null || d < record) {
                    closestBranch = branch;
                    record = d;
                }
            }

            // console.log(closestBranch)

            if (closestBranch != null) {
                const newDir = leaf.pos.clone().subtract(closestBranch.pos)
                newDir.normalize()
                // console.log(22222, leaf.pos.clone(), closestBranch.pos)
                closestBranch.dir.add(newDir)
                closestBranch.count++;
            }
        }

        for (let i = this.leaves.length -1; i >= 0; i--) {
            if (this.leaves[i].reached) {
                this.leaves.splice(i, 1);
            }
        }
        for (let i = 0; i < this.branches.length; i++) {
            let branch = this.branches[i];
            if (branch.count > 0) {
                branch.dir.x /= branch.count;
                branch.dir.y /= branch.count;

                const newPos = branch.pos.clone().add(branch.dir.clone().multiply(new Victor(5, 5)))
                const newBranch = new Branch(branch, newPos, branch.dir.clone())
                
                // console.log('newBranch grow', newBranch)
                this.branches.push(newBranch)
                if (this.branches.length > 400) {
                    this.branches.shift();
                }
            }
        }

        // console.log('--------', this.branches.length)
    }

    this.drawHelp = function (ctx) {

        ctx.globalAlpha = 0.3;
        for (let i = 0; i < this.leaves.length; i++) {
            const leaf = this.leaves[i]

            ctx.beginPath();
            ctx.arc(leaf.pos.x, leaf.pos.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = '#ff0005';
            ctx.fill();
                    
        }
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            const point = this.points[i]

            ctx.lineTo(point.x, point.y);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#ff0005';
            ctx.stroke();
                    
        }
    }
    this.drawHelp2 = function (ctx) {
        ctx.globalAlpha = 1;
        for (let i = 0; i < this.leaves.length; i++) {
            const leaf = this.leaves[i]

            ctx.beginPath();
            ctx.arc(leaf.pos.x, leaf.pos.y, 6, 0, 2 * Math.PI);
            ctx.fillStyle = '#ff0005';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(leaf.pos.x, leaf.pos.y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
                    
        }
        // ctx.globalAlpha = 0.3;
        // ctx.beginPath();
        // ctx.moveTo(this.points[0].x, this.points[0].y);
        // for (let i = 1; i < this.points.length; i++) {
        //     const point = this.points[i]

        //     ctx.lineTo(point.x, point.y);
            
                    
        // }
        // ctx.lineWidth = 2;
        //     ctx.strokeStyle = '#ff0005';
        //     ctx.stroke();

       
    }

    this.drawTree = function (ctx, data) {
        
        for (let i = 0; i < this.branches.length; i++) {
            // console.log(data)
            const val = data ? (data) * 2 : 100;
            // ctx.globalCompositeOperation = "xor";  
            ctx.lineWidth = 16;
            // console.log(`rgb(0, ${data[0]}, ${256 - data[0]})`)
            ctx.strokeStyle = `rgb(0, ${val}, ${256 - val})`;
            const branch = this.branches[i]
            branch.draw(ctx);
            
                    
        }
    }
    this.drawTreeVideo = function (ctx, video) {
        
        for (let i = 0; i < this.branches.length; i++) {
            // console.log(data)
            const val = (data) * 2;
            // ctx.globalCompositeOperation = "xor";  
            ctx.lineWidth = 6;
            // console.log(`rgb(0, ${data[0]}, ${256 - data[0]})`)
            ctx.strokeStyle = `rgb(0, ${val}, ${256 - val})`;
            const branch = this.branches[i]
            branch.draw(ctx);
            
                    
        }
    }
}