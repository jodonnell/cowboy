var TumbleWeed = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
    },

    update: function() {
        this.x = this.x - 5;
    },

    draw: function (context) {
        var image = gameImages["tumbleWeed"];
        context.drawImage(image, this.x, this.y);
    },
    
});
