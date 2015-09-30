var PhysicsJump = Class.extend({
    init: function(y) {
        this.y = y;
        this._startY = y;

        this._isJumping = false;

        this.time = 0;
        this.velocity = 40;
        this.gravity = -3;
    },

    update: function() {
        if (this.isJumping()) {
            var height = this.velocity * this.time + (this.gravity * Math.pow(this.time, 2)) / 2;
            this.y = this._startY - height;
            this.time = this.time + 1;
        }

        if (this.y > this._startY) {
            this.y = this._startY;
            this._isJumping = false;
            this.time = 0;
        }
    },

    beginJump: function () {
				this._isJumping = true;
    },

    isJumping: function () {
				return this._isJumping;
    },

    canJump: function () {
				return !this.isJumping();
    },

    releaseJump: function () {}
});
