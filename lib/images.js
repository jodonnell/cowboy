
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
        this._loadImage("cowboy10", "cowboy-10.gif");
        this._loadImage("cowboy13", "cowboy-13.gif");
        this._loadImage("cowboy14", "cowboy-14.gif");
        this._loadImage("cowboy15", "cowboy-15.gif");
        this._loadImage("cowboy16", "cowboy-16.gif");
        this._loadImage("cowboy17", "cowboy-17.gif");
        this._loadImage("cowboy18", "cowboy-18.gif");
        this._loadImage("cowboy19", "cowboy-19.gif");
        this._loadImage("cowboy20", "cowboy-20.gif");

        this._loadImage("tumbleWeed", "tumbleweed.png");

        this.cowboy21 = new Image();
        this.cowboy21.src = "images/cowboy-21.gif";
        this.cowboy21.onload = callback;
    },

    _loadImage: function (prop, imageFile) {
        this[prop] = new Image();
        this[prop].src = "images/" + imageFile;

    }
});
