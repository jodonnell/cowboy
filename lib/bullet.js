var Bullet = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.width = 26;
        this.height = 16;
        this.dead = false;
    },

    update: function() {
        this.x += 7;
    },

    draw: function (context) {
        var image = gameImages['bullet'];
        context.drawImage(image, this.x, this.y);
    },
});
