var Cowboy = Class.extend({
    init: function(x, y, controller) {
        this.x = x;
        this.y = y;
        this.controller = controller;
        this._startY = y;
        this.animations = new CowboyAnimations();
        this.jumping = new PhysicsHoldJump(this.y);
        this.jumpingType = 0;
        this.width = 68;
        this.height = 100;
        this._bullets = 6;

        this._isShooting = false;
        this._isReloading = false;
    },

    update: function(args) {
        var collisionDetector = args.collisionDetector;
        var onscreenSprites = args.onscreenSprites;

        this._respondToControls(onscreenSprites, collisionDetector);
        this._updateState(onscreenSprites, collisionDetector);
        this._checkForCollisions(onscreenSprites, collisionDetector);

    },

    _updateState: function (onscreenSprites, collisionDetector) {
        this.jumping.update();
        this.y = this.jumping.y;

        this.animations.update();

        if (this.animations.isOver()) {
            if (this._isReloading) {
                this._bullets = 6;
            }

            this._isShooting = false;
            this._isReloading = false;

            this.animations.resetAnimation();
        }

        if (this.animations.isShotFired()) {
            this._shoot(onscreenSprites, collisionDetector);
        }
    },

    _respondToControls: function (onscreenSprites, collisionDetector) {
        if (this.controller.isJumping() && this.canJump()) {
            this.beginJump();
        }

        if (!this.controller.isJumping()) {
            this.releaseJump();
        }

        if (this.controller.isShooting() && this.canShoot()) {
            this.beginShoot();
        }
        else if (this.controller.isShooting() && this.bullets() === 0 && this.animations.isStanding()) {
            this.beginReload();
        }

        if (this.controller.changeJump()) {
            this.changeJump();
        }
    },

    _checkForCollisions: function (onscreenSprites, collisionDetector) {
        this._checkForDeath(onscreenSprites, collisionDetector);
    },

    _checkForDeath: function (onscreenSprites, collisionDetector) {
        _.each(onscreenSprites.enemies, function (enemy) {
            if (collisionDetector.isCollide(this, enemy)) {
                $('.hud .info .dead').delay(100).fadeOut("fast").delay(100).fadeIn("fast");
            }
        }, this);
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
        if (this.canJump()) {
            if (this._isShooting && !this.canJumpAndShoot()) {
                this.animations.cancel();
                this._isShooting = false;
            }
            this.jumping.beginJump();
        }
    },

    canShoot: function () {
        if (this.bullets() === 0)
            return false;

        if (this.canJumpAndShoot())
            return !this._isShooting;

        return !this._isShooting && this.canJump();
    },

    beginShoot: function () {
				this._isShooting = true;
        this._bullets -= 1;
        this.animations.shoot();
    },

    beginReload: function () {
				this._isReloading = true;
        this.animations.reload();
    },

    canJump: function () {
				return this.jumping.canJump() && !this._isReloading;
    },

    releaseJump: function () {
				this.jumping.releaseJump();
    },

    changeJump: function () {
        if (this.jumpingType === 0) {
            this.jumping = new SimpleJump(this._startY);
            this.jumpingType = 1;
            $('.hud .info').text('Simple Jump');
            $('.hud .controls').find('.variable-physics, .physics').hide();
            $('.hud .simple').show();
        }
        else if (this.jumpingType === 1) {
            this.jumping = new PhysicsJump(this._startY);
            this.jumpingType = 2;
            $('.hud .info').text('Physics Jump');
            $('.hud .controls').find('.variable-physics, .simple').hide();
            $('.hud .physics').show();
        }
        else if (this.jumpingType === 2) {
            this.jumping = new PhysicsHoldJump(this._startY);
            this.jumpingType = 0;
            $('.hud .info').text('Variable Physics Jump');
            $('.hud .controls').find('.physics, .simple').hide();
            $('.hud .variable-physics').show();
        }
    },

    _shoot: function (onscreenSprites, collisionDetector) {
        var x = this.x + this.width + 15;
        var y = this.y + 30;

        var hitEnemies = _.filter(onscreenSprites.enemies, function (enemy) {
            return collisionDetector.lineWithRectangle(enemy, [x, y], [1850, y]);
        }, this);

        var deadEnemy = _.min(hitEnemies, function (enemy) {
				    return enemy.x;
        });

        if (deadEnemy !== Number.POSITIVE_INFINITY) {
            onscreenSprites.enemies.remove(deadEnemy);
        }
    },

    canJumpAndShoot: function () {
				return $('.hud .controls .jumpNshoot input').is(':checked');
    },

    bullets: function () {
				return this._bullets;
    }
});
