var Robot = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 92;
        this.time = 0;
        this.vulnerable = false;
        this.vulnerableTime = 0;
    },

    update: function() {
        this.x = this.x - 8;
        this.time += 1;
        if (this.time === 6283)
            this.time = 0;

        if (_.random(100) > 97 && this.vulnerable == false) {
            this.vulnerable = true;
            this.vulnerableTime = 1;
        }

        if (this.vulnerableTime !== 0) {
            this.vulnerableTime = this.vulnerableTime + 1;
            if (this.vulnerableTime > 40) {
                this.vulnerableTime = 0;
                this.vulnerable = false;
            }
        }

    },

    draw: function (context) {
        var image;
        var mod = this.time % 6;
        if (mod === 0 || mod === 1) {
            image = gameImages["robotWalk1"];
        }
        else if (mod === 2 || mod === 3) {
            image = gameImages["robotWalk2"];
        }
        else if (mod === 4 || mod === 5) {
            image = gameImages["robotWalk3"];
        }

        if (this.vulnerable) {
            var canvas = document.createElement('canvas')
            canvas.width = this.width;
            canvas.height = this.height;

            var offscreenContext = canvas.getContext('2d');
            offscreenContext.drawImage(image, 0, 0);

            var data = offscreenContext.getImageData(0, 0, this.width, this.height);

            for (var i = 0, length = data.data.length; i < length; i += 4) {
                data.data[i] = Math.min(255, data.data[i] + (this.vulnerableTime * 4));
            }

            offscreenContext.putImageData(data, 0, 0);
            context.drawImage(canvas, this.x, this.y)
        }
        else
            context.drawImage(image, this.x, this.y);
    },


    canDie: function () {
				return this.vulnerable;
    }
});
