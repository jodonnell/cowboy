var Game = Class.extend({
    init: function(gameInit) {
        this.gameInit = gameInit;
    },

    update: function() {
        this.draw();
    },

    draw: function () {
        var canvas = $("#gameCanvas");
        var context = canvas[0].getContext('2d');

        context.fillStyle = 'olive';
        context.fillRect(0, 0, this.gameInit.width, this.gameInit.height);

        var image = gameImages['cowboy0'];
        context.drawImage(image, 40, this.gameInit.height - 200);
    },

    updateWithTime: function() {
        var startTime = new Date().getTime();
        this.update();
        return new Date().getTime() - startTime;
    }
});
