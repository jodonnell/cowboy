var Robot = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.width = 34;
        this.height = 45;
        this.time = 0;
    },

    update: function() {
        this.x = this.x - 7;
        this.time += 1;
        if (this.time === 6283)
            this.time = 0;
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

        context.drawImage(image, this.x, this.y);
    },

});
