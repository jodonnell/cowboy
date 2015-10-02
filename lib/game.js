var Game = Class.extend({
    init: function(gameInit) {
        this.gameInit = gameInit;
        this.controller = new Control();
        this.cowboy = new Cowboy(40, this.gameInit.height - 200);

        this.sprites = [this.cowboy];
        this.enemies = [];
        this.bullets = [];
        this.collisionDetection = new CollisionDetection();


        $(document).on('fire', $.proxy(function () {
            var bullet = new Bullet(this.cowboy.x + this.cowboy.width + 15, this.cowboy.y + 30);
            this.sprites.push(bullet);
            this.bullets.push(bullet);

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

        _.each(this.enemies, function (enemy) {
            _.each(this.bullets, function (bullet) {
                if (this.collisionDetection.isCollide(enemy, bullet)) {
                    enemy.dead = true;
                    bullet.dead = true;
                }
            }, this);
        }, this);


        this.sprites = _.filter(this.sprites, function (sprite) {
            return sprite.dead == false;
        }, this);

        this.enemies = _.filter(this.enemies, function (enemy) {
            return enemy.dead == false;
        }, this);

        this.bullets = _.filter(this.bullets, function (bullet) {
            return bullet.dead == false;
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
