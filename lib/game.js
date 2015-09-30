var Game = Class.extend({
    init: function(gameInit) {
        this.gameInit = gameInit;
        this.controller = new Control();
        this.cowboy = new Cowboy(40, this.gameInit.height - 200);
    },

    update: function() {
        if (this.controller.isJumping() && this.cowboy.canJump()) {
            this.cowboy.beginJump();
        }

        if (!this.controller.isJumping()) {
            this.cowboy.releaseJump();
        }

        if (this.controller.isShooting() && this.cowboy.canShoot()) {
            this.cowboy.beginShoot();
        }

        if (this.controller.changeJump()) {
            this.cowboy.changeJump();
        }

        this.cowboy.update();
    },

    draw: function () {
        var canvas = $("#gameCanvas");
        var context = canvas[0].getContext('2d');

        context.fillStyle = 'olive';
        context.fillRect(0, 0, this.gameInit.width, this.gameInit.height);

        this.cowboy.draw(context);
    },
});
