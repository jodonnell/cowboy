var Game = Class.extend({
    init: function(gameInit) {
        this.gameInit = gameInit;
        this.controller = new Control();
        this.cowboy = new Cowboy(40, this.gameInit.height - 200);

        this.sprites = [this.cowboy];
        this.enemies = [];
        this.collisionDetection = new CollisionDetection();
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

        _.each(this.sprites, function (sprite) {
            sprite.update();
        }, this);


        if (_.random(100) > 99) {
            var tumbleWeed = new TumbleWeed(1240, this.gameInit.height - 170);
            this.sprites.push(tumbleWeed);
            this.enemies.push(tumbleWeed);
            
        }

        _.each(this.enemies, function (enemy) {
            if (this.collisionDetection.isCollide(this.cowboy, enemy)) {
                $('.hud .info').text('died');
            }
        }, this);
    },

    draw: function () {
        var canvas = $("#gameCanvas");
        var context = canvas[0].getContext('2d');

        context.fillStyle = 'olive';
        context.fillRect(0, 0, this.gameInit.width, this.gameInit.height);

        _.each(this.sprites, function (sprite) {
            sprite.draw(context);
        }, this);
    },
});
