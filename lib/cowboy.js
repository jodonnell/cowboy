var Cowboy = Class.extend({
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this._startY = y;
        this.animations = new CowboyAnimations();
        this.jumping = new PhysicsHoldJump(this.y);
        this.jumpingType = 0;
        this.width = 68;
        this.height = 100;
        this.dead = false;

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
        context.drawImage(image, this.x, this.y);

        if (false) {
            context.rect(this.x,this.y,this.width,this.height);
            context.stroke();
        }
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

    releaseJump: function () {
				this.jumping.releaseJump();
    },

    changeJump: function () {
        if (this.jumpingType === 0) {
            this.jumping = new SimpleJump(this._startY);
            this.jumpingType = 1;
            $('.hud .info').text('Simple Jump');
            $('.hud .controls div').hide();
            $('.hud .simple').show();
        }
        else if (this.jumpingType === 1) {
            this.jumping = new PhysicsJump(this._startY);
            this.jumpingType = 2;
            $('.hud .info').text('Physics Jump');
            $('.hud .controls div').hide();
            $('.hud .physics').show();
        }
        else if (this.jumpingType === 2) {
            this.jumping = new PhysicsHoldJump(this._startY);
            this.jumpingType = 0;
            $('.hud .info').text('Variable Physics Jump');
            $('.hud .controls div').hide();
            $('.hud .variable-physics').show();
        }
    }
});
