var CowboyAnimations = Class.extend({
    init: function(x, y) {
        this.currentImage = 'cowboyStand';

        this.frame = 0;
        this.currentFrame = 0;
        this.frameList = ["cowboyDraw1", "cowboyDraw2", "cowboyDraw3", "cowboyFire1", "cowboyFire2", "cowboyFire3", "cowboyDraw3", "cowboyDraw2", "cowboyDraw1"];
    },

    update: function () {
        this.currentImage = this.frameList[this.currentFrame];

        this.frame += 1;
        if (this.frame > 2) {
            this.frame = 0;
            this.currentFrame += 1;
            if (this.currentFrame === 5) {
                $(document).trigger('fire');
            }
        }
    },

    isOver: function () {
        if (this.currentFrame == this.frameList.length) {
            this.currentImage = 'cowboyStand';
            this.currentFrame = 0;
            return true;
        }
        return false;
    }

});
