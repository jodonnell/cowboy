var PhysicsHoldJump = Class.extend({
    init: function(y) {
        this.y = y;
        this._startY = y;

        this.velocityY = 0;
        this.gravity = 0.5;
        this.releasedJump = false;
        this.change = 0;
        this.onGround = false;
    },

    update: function() {
        this.velocityY += this.gravity;
        this.y += this.velocityY;
        if (this.y > this._startY)
        {
            this.y = this._startY;
            this.velocityY = 0.0;
            this.onGround = true;
        }
        
    },

    beginJump: function () {
        if (this.onGround)
        {
            this.velocityY = -15.0;
            this.onGround = false;
        }
    },

    isJumping: function () {
				return false;
    },

    canJump: function () {
				return true;
    },

    releaseJump: function () {
        if(this.velocityY < -6.0) {
            this.velocityY = -6.0;
        }
    }
});
