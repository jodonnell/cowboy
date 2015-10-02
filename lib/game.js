var Game = Class.extend({
    init: function(gameInit) {
        this.gameInit = gameInit;
        this.controller = new Control();
        this.cowboy = new Cowboy(40, this.gameInit.height - 200);

        this.sprites = [this.cowboy];
        this.enemies = [];
        this.collisionDetection = new CollisionDetection();


        $(document).on('fire', $.proxy(function () {
            var y = this.cowboy.y + 30;

            var hitEnemies = _.filter(this.enemies, function (enemy) {
                if (this.collisionDetection.lineWithRectangle(enemy, [this.cowboy.x + this.cowboy.width + 15, y], [1850, y])) {
                    return true;
                }
                return false;
            }, this);

            var deadEnemy = _.min(hitEnemies, function (enemy) {
				        return enemy.x;
            });

            deadEnemy.dead = true;
        }, this));

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
                $('.hud .info .dead').delay(100).fadeOut("fast").delay(100).fadeIn("fast").delay(100).fadeOut("fast");
            }
        }, this);

        this.sprites = _.filter(this.sprites, function (sprite) {
            return sprite.dead == false;
        }, this);

        this.enemies = _.filter(this.enemies, function (enemy) {
            return enemy.dead == false;
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
