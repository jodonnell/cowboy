var Cowboy = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this._startY = y;
        this._isJumping = false;
        this._isFalling = false;
        this._isShooting = false;
        this._currentImage = 'cowboyStand';

        this.frame = 0;
        this.currentFrame = 0;
        this.frameList = ["cowboyDraw1", "cowboyDraw2", "cowboyDraw3", "cowboyFire1", "cowboyFire2", "cowboyFire3", "cowboyDraw3", "cowboyDraw2", "cowboyDraw1"];
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

            this._currentImage = this.frameList[this.currentFrame];

            if (this.currentFrame == this.frameList.length) {
                this._isShooting = false;
                this._currentImage = 'cowboyStand';
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
