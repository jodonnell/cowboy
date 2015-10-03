
"use strict";

var Images = Class.extend({
    init: function (callback) {
        this._loadImage("cowboyStand", "cowboy-stand.gif");
        this._loadImage("cowboyDraw1", "cowboy-draw-1.gif");
        this._loadImage("cowboyDraw2", "cowboy-draw-2.gif");
        this._loadImage("cowboyDraw3", "cowboy-draw-3.gif");
        this._loadImage("cowboyFire1", "cowboy-fire-1.gif");
        this._loadImage("cowboyFire2", "cowboy-fire-2.gif");
        this._loadImage("cowboyFire3", "cowboy-fire-3.gif");
        this._loadImage("cowboyTwirl1", "cowboy-twirl-1.gif");
        this._loadImage("cowboyTwirl2", "cowboy-twirl-2.gif");
        this._loadImage("cowboyTwirl3", "cowboy-twirl-3.gif");
        this._loadImage("cowboyTwirl4", "cowboy-twirl-4.gif");
        this._loadImage("cowboyTwirl5", "cowboy-twirl-5.gif");
        this._loadImage("cowboyTwirl6", "cowboy-twirl-6.gif");
        this._loadImage("cowboyTwirl7", "cowboy-twirl-7.gif");

        this._loadImage("tumbleWeed", "tumbleweed.png");

        this.cowboyTwirl8 = new Image();
        this.cowboyTwirl8.src = "images/cowboy-twirl-8.gif";
        this.cowboyTwirl8.onload = callback;
    },

    _loadImage: function (prop, imageFile) {
        this[prop] = new Image();
        this[prop].src = "images/" + imageFile;

    }
});
