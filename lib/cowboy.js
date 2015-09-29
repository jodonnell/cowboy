var Cowboy = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.animations = new CowboyAnimations();
        this.jumping = new CowboyJump(this.y);

        this._isShooting = false;
    },

    update: function() {
        this.jumping.update();
        this.y = this.jumping.y;

        if (this.animations.isOver()) {
            this._isShooting = false;
        }

        if (this._isShooting)
            this.animations.update();
    },

    draw: function (context) {
        var image = gameImages[this.animations.currentImage];
        context.drawImage(image, 40, this.y);
    },

    beginJump: function () {
        this.jumping.beginJump();
    },

    canShoot: function () {
				return !this._isShooting;
    },

    beginShoot: function () {
				this._isShooting = true;
    },

    canJump: function () {
				return this.jumping.canJump();
    },
});
