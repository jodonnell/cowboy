var Cowboy = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this._startY = y;
        this._isJumping = false;
        this._isFalling = false;
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
    },

    draw: function (context) {
        var image = gameImages['cowboy0'];
        context.drawImage(image, 40, this.y);

    },

    beginJump: function () {
				this._isJumping = true;
    },

    isJumping: function () {
				return this._isJumping;
    },

    canJump: function () {
				return !this.isJumping() && !this.isFalling();
    },
    
    isFalling: function () {
				return this._isFalling;
    }

});
