var PhysicsHoldJump = Class.extend({
    init: function(y) {
        this.y = y;
        this._startY = y;

        this.velocityY = 0;
        this.gravity = 0.5;
        this.releasedJump = false;
        this.onGround = false;
        this.velocityYReleased = -6;
        this.startingVelocity = -15;

        var self = this;
        $('.hud .variable-physics input').change(function () {
				    if ($(this).attr('name') == 'gravity') {
                self.gravity = parseFloat($(this).val());
            }
				    if ($(this).attr('name') == 'gravity-released') {
                self.velocityYReleased = parseFloat($(this).val());
            }
				    if ($(this).attr('name') == 'starting-velocity') {
                self.startingVelocity = parseFloat($(this).val());
            }
        })

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
            this.velocityY = this.startingVelocity;
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
        if(this.velocityY < this.velocityYReleased) {
            this.velocityY = this.velocityYReleased;
        }
    }
});
