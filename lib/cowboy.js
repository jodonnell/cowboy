var Cowboy = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this._startY = y;
        this._isJumping = false;
        this._isFalling = false;
        this._isShooting = false;
        this._currentImage = 'cowboy0';

        this.frame = 0;
        this.currentFrame = 1;
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

        if (this._isShooting) {
            this.frame += 1;
            if (this.frame > 2) {
                this.frame = 0;
                this.currentFrame += 1;
            }

            if (this.currentFrame < 8) {
                this._currentImage = 'cowboy' + this.currentFrame;
            }
            if (this.currentFrame == 8) {
                this._currentImage = 'cowboy24';
            }
            if (this.currentFrame == 9) {
                this._currentImage = 'cowboy25';
            }

            if (this.currentFrame == 9) {
                this._currentImage = 'cowboy25';
            }

            if (this.currentFrame == 10) {
                this._isShooting = false;
                this._currentImage = 'cowboy0';
                this.currentFrame = 1;
            }
        }
    },

    draw: function (context) {
        var image = gameImages[this._currentImage];
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
