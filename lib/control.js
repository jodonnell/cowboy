"use strict";

var Control = Class.extend({
    Z_KEY: 90,
    DVORAK_Z_KEY: 186,
    DVORAK_Z_KEY_FIREFOX: 59,
    X_KEY: 88,
    DVORAK_X_KEY: 81,

    init: function (socket) {
        this.left = 0;
        this.right = 0;
        this.down = 0;
        this.up = 0;
        this.x = 0;
        this.z = 0;
        this.getKey();
    },

    getKey: function () {
        document.addEventListener('touchstart', $.proxy(function(e) {
            e.preventDefault();
            var touch = e.touches[0];

            if (touch.pageX < 100) {
                this.pressLeft();
            }
            else if (touch.pageX >= 100 && touch.pageX < 400) {
                this.pressRight();
            }
            else if (touch.pageX >= 400 && touch.pageX < 850) {
                this.pressJump();
            }
            else if (touch.pageX >= 850) {
                this.pressBubble();
            }
        }, this), false);

        var touchEnd = function(e) {
            e.preventDefault();

            this.releaseLeft();
            this.releaseRight();
            this.releaseJump();
            this.releaseBubble();

        };
        document.addEventListener('touchend', $.proxy(touchEnd, this), false);
        document.addEventListener('touchcancel', $.proxy(touchEnd, this), false);

        $(document).keydown($.proxy(function (event) {
            switch (event.which) {
            case this.Z_KEY:
                this.pressJump();
                break;
            case this.DVORAK_Z_KEY:
                this.pressJump();
                break;
            case this.DVORAK_Z_KEY_FIREFOX:
                this.pressJump();
                break;
            case this.X_KEY:
                this.pressShoot();
                break;
            case this.DVORAK_X_KEY:
                this.pressShoot();
                break;
            }
        }, this));
        $(document).keyup($.proxy(function (event) {
            switch (event.which) {
            case this.Z_KEY:
                this.releaseJump();
                break;
            case this.DVORAK_Z_KEY:
                this.releaseJump();
                break;
            case this.DVORAK_Z_KEY_FIREFOX:
                this.releaseJump();
                break;
            case this.X_KEY:
                this.releaseShoot();
                break;
            case this.DVORAK_X_KEY:
                this.releaseShoot();
                break;
            }
        }, this));
    },

    pressJump: function () {
        this.z = 1;
    },

    pressShoot: function () {
        this.x = 1;
    },

    releaseJump: function () {
        this.z = 0;
    },

    releaseShoot: function () {
        this.x = 0;
    },

    isJumping: function () {
        return this.z;
    },

    isShooting: function () {
        return this.x;
    },

});
