var CowboyAnimations = Class.extend({
    init: function(x, y) {
        this.currentImage = 'cowboyStand';

        this.frame = 0;
        this.currentFrame = 0;
        this.shootingFrameList = ["cowboyDraw1", "cowboyDraw2", "cowboyDraw3", "cowboyFire1", "cowboyFire2", "cowboyFire3", "cowboyDraw3", "cowboyDraw2", "cowboyDraw1"];
        this.frameList = ["cowboyTwirl1", "cowboyTwirl2", "cowboyTwirl3", "cowboyTwirl4", "cowboyTwirl5", "cowboyTwirl6", "cowboyTwirl7", "cowboyTwirl8", "cowboyDraw1"];

        this.currentAnimation = 'standing';
    },

    isStanding: function () {
				return this.currentAnimation === 'standing';
    },

    update: function () {

        if (this.isStanding())
            this.currentImage = 'cowboyStand';


        if (this.currentAnimation === 'shooting') {
            this.currentImage = this.shootingFrameList[this.currentFrame];

            this.frame += 1;
            if (this.frame > 1) {
                this.frame = 0;
                this.currentFrame += 1;
                if (this.currentFrame === 5) {
                    this.shotFired = true;
                }
            }
        }

        if (this.currentAnimation === 'reloading') {
            this.currentImage = this.frameList[this.currentFrame];

            this.frame += 1;
            if (this.frame > 2) {
                this.frame = 0;
                this.currentFrame += 1;
            }
        }
    },

    shoot: function () {
				this.currentAnimation = 'shooting';
    },

    reload: function () {
				this.currentAnimation = 'reloading';
    },

    isShotFired: function () {
        var temp = this.shotFired;
        this.shotFired = false;
        return temp;
    },

    isOver: function () {
        return (this.currentFrame == this.frameList.length)
    },

    resetAnimation: function () {
        this.currentAnimation = 'standing';
        this.currentFrame = 0;
    },

    cancel: function () {
        this.currentImage = 'cowboyStand';
        this.currentFrame = 0;
    }

});
