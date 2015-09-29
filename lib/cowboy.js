var Cowboy = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.animations = new CowboyAnimations();

        this._startY = y;
        this._isJumping = false;
        this._isFalling = false;
        this._isShooting = false;
    },

    update: function() {
        if (this.isJumping())
            this.y = this.y - 10;

        if (this.isFalling())
            this.y = this.y + 10;

        if (this.y < 350) {
            this._isFalling = true;
            this._isJumping = false;
        }

        if (this.y >= this._startY) {
            this.y = this._startY;
            this._isFalling = false;
        }

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
				this._isJumping = true;
    },

    isJumping: function () {
				return this._isJumping;
    },

    canShoot: function () {
				return !this._isShooting;
    },

    beginShoot: function () {
				this._isShooting = true;
    },

    canJump: function () {
				return !this.isJumping() && !this.isFalling();
    },

    isFalling: function () {
				return this._isFalling;
    }

});
