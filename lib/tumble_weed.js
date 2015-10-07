var TumbleWeed = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
        this.time = 0;
    },

    update: function() {
        this.x = this.x - 5;
        this.time += 1;
        if (this.time === 6283)
            this.time = 0;

         if (_.random(100) > 75) {
             this.y -= 1;
         }
    },

    draw: function (context) {
        var image = gameImages["tumbleWeed"];
        context.save();

        context.translate(this.x, this.y);
        context.translate(this.width / 2, this.height / 2);

        context.rotate(0.06283 * this.time);
        context.drawImage(image, -1 * (this.width / 2), -1 * (this.height / 2));

        context.restore();
    },

    canDie: function () {
				return true;
    }

});
