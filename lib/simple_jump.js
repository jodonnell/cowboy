var SimpleJump = Class.extend({
    init: function(y) {
        this.y = y;
        this._startY = y;

        this._isJumping = false;
        this._isFalling = false;

        this.velocity = 10;
        
        var self = this;
        $('.hud .simple input').change(function () {
            self.velocity = parseFloat($(this).val());
        });
        
    },

    update: function() {
        if (this.isJumping())
            this.y = this.y - this.velocity;

        if (this.isFalling())
            this.y = this.y + this.velocity;

        if (this.y < 400) {
            this._isFalling = true;
            this._isJumping = false;
        }

        if (this.y >= this._startY) {
            this.y = this._startY;
            this._isFalling = false;
        }
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
    },

    releaseJump: function () {}    
});
